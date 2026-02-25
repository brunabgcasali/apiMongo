const JornadaModel = require("../Models/JornadaModel");
const TarefaModel = require("../Models/TarefaModel");
const ProgressoTarefaModel = require("../Models/ProgressoTarefaModel");

class JornadaController {

  // CRIAR JORNADA
  async create(req, res) {
    try {
      const { nomeJornada, cursoId, ordem } = req.body;

      if (!nomeJornada || !cursoId) {
        return res.status(400).json({
          message: "Nome da jornada e curso são obrigatórios."
        });
      }

      const jornada = await JornadaModel.create({
        nomeJornada,
        cursoId,
        ordem
      });

      return res.status(201).json(jornada);

    } catch (error) {
      return res.status(400).json({
        erro: error.message
      });
    }
  }


  // BUSCAR TODAS AS JORNADAS
  async findAll(req, res) {
    try {

      const jornadas = await JornadaModel
        .find()
        .populate("cursoId", "nomeCurso");

      return res.status(200).json(jornadas);

    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar jornadas."
      });
    }
  }


  // BUSCAR UMA JORNADA
  async findById(req, res) {
    try {
      const { id } = req.params;

      const jornada = await JornadaModel
        .findById(id)
        .populate("cursoId", "nomeCurso");

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      return res.status(200).json(jornada);

    } catch (error) {
      return res.status(400).json({
        message: "ID inválido."
      });
    }
  }


  // BUSCAR JORNADAS COM PROGRESSO DO USUÁRIO
  async buscarComProgresso(req, res) {
    try {
      const { cursoId } = req.params;
      const usuarioId = req.usuarioId;

      const jornadas = await JornadaModel.find({ cursoId }).sort({ ordem: 1 });

      const resultado = [];

      for (let jornada of jornadas) {

        const tarefas = await TarefaModel.find({ jornadaId: jornada._id });

        const progresso = await ProgressoTarefaModel.find({
          usuarioId,
          tarefaId: { $in: tarefas.map(t => t._id) },
          finalizada: true
        });

        const total = tarefas.length;
        const concluidas = progresso.length;

        resultado.push({
          ...jornada._doc,
          totalTarefas: total,
          tarefasConcluidas: concluidas,
          porcentagem: total > 0 ? (concluidas / total) * 100 : 0
        });
      }

      return res.status(200).json(resultado);

    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar progresso da jornada."
      });
    }
  }


  // ATUALIZAR JORNADA
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nomeJornada, cursoId, ordem } = req.body;

      const jornada = await JornadaModel.findById(id);

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      if (nomeJornada !== undefined) jornada.nomeJornada = nomeJornada;
      if (cursoId !== undefined) jornada.cursoId = cursoId;
      if (ordem !== undefined) jornada.ordem = ordem;

      await jornada.save();

      return res.status(200).json({
        message: "Jornada atualizada com sucesso.",
        jornada
      });

    } catch (error) {
      return res.status(400).json({
        message: "Erro ao atualizar jornada."
      });
    }
  }


  // DELETAR JORNADA
  async delete(req, res) {
    try {
      const { id } = req.params;

      const jornada = await JornadaModel.findById(id);

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      await JornadaModel.findByIdAndDelete(id);

      return res.status(200).json({
        message: "Jornada deletada com sucesso."
      });

    } catch (error) {
      return res.status(400).json({
        message: "Erro ao deletar jornada."
      });
    }
  }
}

module.exports = new JornadaController();