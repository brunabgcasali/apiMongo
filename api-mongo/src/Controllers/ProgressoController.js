const ProgressoModel = require("../Models/ProgressoModel");
const JornadaModel = require("../Models/JornadaModel");
const QuestaoModel = require("../Models/QuestaoModel");

class ProgressoController {

    async responder(req, res) {
        try {

            const { jornadaId, tarefaId, questaoId, resposta } = req.body;

            if (!jornadaId || !tarefaId || !questaoId || resposta === undefined) {
                return res.status(400).json({
                    message: "Dados incompletos."
                });
            }

            const questao = await QuestaoModel.findById(questaoId);

            if (!questao) {
                return res.status(404).json({
                    message: "Questão não encontrada."
                });
            }

            const acertou = resposta === questao.correta;


            // salva resposta
            const progresso = await ProgressoModel.create({
                jornada: jornadaId,
                tarefa: tarefaId,
                questao: questaoId,
                acertou
            });

            // SE ACERTOU → GANHA XP
            if (acertou) {
                await JornadaModel.findByIdAndUpdate(
                    jornadaId,
                    { $inc: { xpTotal: 10 } } // adiciona 10 XP
                );
            }


            return res.status(200).json({
                acertou,
                respostaCorreta: questao.correta
            });

        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new ProgressoController();
