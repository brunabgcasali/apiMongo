const ProgressoModel = require("../Models/ProgressoModel");
const JornadaModel = require("../Models/JornadaModel");
const TarefaModel = require("../Models/TarefaModel");

class EstatisticaController {

  async resumo(req, res) {
    try {

      const { jornadaId } = req.params;

      // 1️⃣ verificar se a jornada existe
      const jornada = await JornadaModel.findById(jornadaId);

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      // 2️⃣ total de questões respondidas
      const totalRespondidas = await ProgressoModel.countDocuments({
        jornada: jornadaId
      });

      // 3️⃣ total de acertos
      const totalAcertos = await ProgressoModel.countDocuments({
        jornada: jornadaId,
        acertou: true
      });

      // 4️⃣ total de erros
      const totalErros = await ProgressoModel.countDocuments({
        jornada: jornadaId,
        acertou: false
      });

      // 5️⃣ precisão
      let precisao = 0;

      if (totalRespondidas > 0) {
        precisao = (totalAcertos / totalRespondidas) * 100;
      }

      // 6️⃣ tarefas concluídas
      // (uma tarefa é concluída quando o usuário respondeu TODAS as questões dela)

      const tarefas = await TarefaModel.find();

      let tarefasConcluidas = 0;

      for (const tarefa of tarefas) {

        const totalQuestoesDaTarefa = tarefa.questoesTarefa.length;

        const respondidasDaTarefa = await ProgressoModel.countDocuments({
          jornada: jornadaId,
          tarefa: tarefa._id
        });

        if (
          totalQuestoesDaTarefa > 0 &&
          respondidasDaTarefa >= totalQuestoesDaTarefa
        ) {
          tarefasConcluidas++;
        }
      }

      // resposta final
      return res.status(200).json({
        xpTotal: jornada.xpTotal,
        nivel: jornada.nivel,
        respondidas: totalRespondidas,
        acertos: totalAcertos,
        erros: totalErros,
        precisao: precisao.toFixed(2) + "%",
        tarefasConcluidas
      });

    } catch (error) {
      return res.status(400).json({
        message: "Erro ao gerar estatísticas.",
        erro: error.message
      });
    }
  }
}

module.exports = new EstatisticaController();
