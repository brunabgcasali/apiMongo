const TarefaModel = require("../Models/TarefaModel");
const QuestaoModel = require("../Models/QuestaoModel");
const mongoose = require("mongoose");

class TarefaController {

  // CRIAR TAREFA + QUESTÕES
  async create(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const { nomeTarefa, topicoTarefa, questoes } = req.body;

      if (!Array.isArray(questoes)) {
        return res.status(400).json({
          message: "O campo 'questoes' deve ser um array."
        });
      }
      
      // validações básicas
      if (!nomeTarefa || !topicoTarefa) {
        return res.status(400).json({
          message: "Nome da tarefa e tópico são obrigatórios."
        });
      }

      if (!questoes || questoes.length === 0) {
        return res.status(400).json({
          message: "A tarefa deve possuir pelo menos uma questão."
        });
      }

      // cria tarefa vazia
      const tarefa = await TarefaModel.create([{
        nomeTarefa,
        topicoTarefa,
        questoesTarefa: []
      }], { session });

      const tarefaCriada = tarefa[0];
      const questoesIds = [];

      // cria questões
      for (const q of questoes) {

        if (!q.alternativas || q.alternativas.length < 2) {
          throw new Error("Cada questão deve ter pelo menos duas alternativas.");
        }

        if (q.correta < 0 || q.correta >= q.alternativas.length) {
          throw new Error("Alternativa correta inválida.");
        }

        const novaQuestao = await QuestaoModel.create([{
          enunciado: q.enunciado,
          alternativas: q.alternativas,
          correta: q.correta
        }], { session });

        questoesIds.push(novaQuestao[0]._id);
      }

      // adiciona as questões na tarefa
      tarefaCriada.questoesTarefa = questoesIds;
      await tarefaCriada.save({ session });

      await session.commitTransaction();
      session.endSession();

      return res.status(201).json(tarefaCriada);

    } catch (error) {
      await session.abortTransaction();
      session.endSession();

      return res.status(400).json({ erro: error.message });
    }
  }

  // LISTAR TODAS AS TAREFAS (com filtro opcional por tópico)
  async findAll(req, res) {
    try {

      const { topico } = req.query;

      let filtro = {};

      // se vier ?topico=1 na URL
      if (topico) {
        filtro.topicoTarefa = topico;
      }

      const tarefas = await TarefaModel
        .find(filtro)
        .populate("questoesTarefa")
        .sort({ topicoTarefa: 1, nomeTarefa: 1 });

      return res.status(200).json(tarefas);

    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar tarefas."
      });
    }
  }


  // BUSCAR UMA TAREFA
  async findById(req, res) {
    try {
      const { id } = req.params;

      const tarefa = await TarefaModel
        .findById(id)
        .populate("questoesTarefa");

      if (!tarefa) {
        return res.status(404).json({ message: "Tarefa não encontrada." });
      }

      return res.status(200).json(tarefa);

    } catch (error) {
      return res.status(400).json({ message: "ID inválido." });
    }
  }

  // ATUALIZAR TAREFA
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nomeTarefa, topicoTarefa } = req.body;

      const tarefa = await TarefaModel.findById(id);

      if (!tarefa) {
        return res.status(404).json({ message: "Tarefa não encontrada." });
      }

      if (nomeTarefa !== undefined) tarefa.nomeTarefa = nomeTarefa;
      if (topicoTarefa !== undefined) tarefa.topicoTarefa = topicoTarefa;

      await tarefa.save();

      return res.status(200).json({
        message: "Tarefa atualizada com sucesso.",
        tarefa
      });

    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar tarefa." });
    }
  }

  // DELETAR TAREFA (COM AS QUESTÕES)
  async delete(req, res) {
    try {
      const { id } = req.params;

      const tarefa = await TarefaModel.findById(id);

      if (!tarefa) {
        return res.status(404).json({ message: "Tarefa não encontrada." });
      }

      // apaga todas as questões vinculadas
      await QuestaoModel.deleteMany({
        _id: { $in: tarefa.questoesTarefa }
      });

      // apaga a tarefa
      await TarefaModel.findByIdAndDelete(id);

      return res.status(200).json({
        message: "Tarefa e suas questões foram deletadas com sucesso."
      });

    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar tarefa." });
    }
  }
}

module.exports = new TarefaController();
