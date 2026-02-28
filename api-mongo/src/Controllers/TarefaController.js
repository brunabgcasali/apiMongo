const TarefaModel = require("../Models/TarefaModel");
const QuestaoModel = require("../Models/QuestaoModel");
const mongoose = require("mongoose");

class TarefaController {

  // ================================
  // CRIAR TAREFA SIMPLES + QUESTÕES
  // ================================
  async create(req, res) {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const { titulo, topico, ordem, dificuldade, questoes } = req.body;

      if (!titulo || !topico || !ordem) {
        return res.status(400).json({
          message: "Título, tópico e ordem são obrigatórios."
        });
      }

      if (!Array.isArray(questoes) || questoes.length === 0) {
        return res.status(400).json({
          message: "A tarefa deve possuir pelo menos uma questão."
        });
      }

      const tarefa = await TarefaModel.create([{
        titulo,
        topico,
        ordem,
        dificuldade,
        xpTotal: 0,
        questoesTarefa: []
      }], { session });

      const tarefaCriada = tarefa[0];
      const questoesIds = [];

      for (const q of questoes) {

        if (!Array.isArray(q.alternativas) || q.alternativas.length < 2) {
          throw new Error("Cada questão deve ter pelo menos duas alternativas.");
        }

        const novaQuestao = await QuestaoModel.create([{
          enunciado: q.enunciado,
          alternativas: q.alternativas
        }], { session });

        questoesIds.push(novaQuestao[0]._id);
      }

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


  // ==========================================
  // CRIAR TAREFA COMPLETA (5 QUESTÕES FIXAS)
  // ==========================================
  async createComplete(req, res) {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const { titulo, topico, ordem, dificuldade, questoes } = req.body;

      if (!titulo || !topico || !ordem || !dificuldade) {
        return res.status(400).json({
          message: "Título, tópico, ordem e dificuldade são obrigatórios."
        });
      }

      if (!Array.isArray(questoes) || questoes.length !== 5) {
        return res.status(400).json({
          message: "A tarefa deve conter exatamente 5 questões."
        });
      }

      let xpPorQuestao = 0;

      if (dificuldade === "facil") xpPorQuestao = 5;
      if (dificuldade === "medio") xpPorQuestao = 10;
      if (dificuldade === "dificil") xpPorQuestao = 20;

      if (xpPorQuestao === 0) {
        return res.status(400).json({
          message: "Dificuldade inválida. Use: facil, medio ou dificil."
        });
      }

      const tarefa = await TarefaModel.create([{
        titulo,
        topico,
        ordem,
        dificuldade,
        xpTotal: xpPorQuestao * 5,
        questoesTarefa: []
      }], { session });

      const tarefaCriada = tarefa[0];
      const questoesIds = [];

      for (const q of questoes) {

        if (!q.enunciado) {
          throw new Error("Todas as questões devem possuir enunciado.");
        }

        if (!Array.isArray(q.alternativas) || q.alternativas.length !== 4) {
          throw new Error("Cada questão deve ter exatamente 4 alternativas.");
        }

        const corretas = q.alternativas.filter(a => a.correta === true);

        if (corretas.length !== 1) {
          throw new Error("Cada questão deve possuir exatamente uma alternativa correta.");
        }

        const novaQuestao = await QuestaoModel.create([{
          enunciado: q.enunciado,
          alternativas: q.alternativas
        }], { session });

        questoesIds.push(novaQuestao[0]._id);
      }

      tarefaCriada.questoesTarefa = questoesIds;
      await tarefaCriada.save({ session });

      await session.commitTransaction();
      session.endSession();

      return res.status(201).json({
        message: "Tarefa completa criada com sucesso!",
        tarefa: tarefaCriada
      });

    } catch (error) {

      await session.abortTransaction();
      session.endSession();

      return res.status(400).json({ erro: error.message });
    }
  }


  // ==========================
  // LISTAR TODAS AS TAREFAS
  // ==========================
  async findAll(req, res) {
    try {

      const { topico } = req.query;

      let filtro = {};

      if (topico) {
        filtro.topico = topico;
      }

      const tarefas = await TarefaModel
        .find(filtro)
        .populate("questoesTarefa")
        .sort({ topico: 1, ordem: 1 });

      return res.status(200).json(tarefas);

    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar tarefas."
      });
    }
  }


  // ==========================
  // BUSCAR POR ID
  // ==========================
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


  // ==========================
  // ATUALIZAR
  // ==========================
  async update(req, res) {
    try {

      const { id } = req.params;
      const { titulo, topico, ordem, dificuldade } = req.body;

      const tarefa = await TarefaModel.findById(id);

      if (!tarefa) {
        return res.status(404).json({ message: "Tarefa não encontrada." });
      }

      if (titulo !== undefined) tarefa.titulo = titulo;
      if (topico !== undefined) tarefa.topico = topico;
      if (ordem !== undefined) tarefa.ordem = ordem;
      if (dificuldade !== undefined) tarefa.dificuldade = dificuldade;

      await tarefa.save();

      return res.status(200).json({
        message: "Tarefa atualizada com sucesso.",
        tarefa
      });

    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar tarefa." });
    }
  }


  // ==========================
  // DELETAR
  // ==========================
  async delete(req, res) {
    try {

      const { id } = req.params;

      const tarefa = await TarefaModel.findById(id);

      if (!tarefa) {
        return res.status(404).json({ message: "Tarefa não encontrada." });
      }

      await QuestaoModel.deleteMany({
        _id: { $in: tarefa.questoesTarefa }
      });

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