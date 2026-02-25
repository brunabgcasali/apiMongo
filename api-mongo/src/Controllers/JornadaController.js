const JornadaModel = require("../Models/JornadaModel");

class JornadaController {

  // CRIAR JORNADA
  async create(req, res) {
    try {
      const { usuario } = req.body;

      if (!usuario) {
        return res.status(400).json({
          message: "Usuário é obrigatório."
        });
      }

      // cria jornada sempre com XP 0 e nível 1
      const jornada = await JornadaModel.create({
        usuario
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
        .populate("usuario", "nomeUsuario emailUsuario");

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
        .populate("usuario", "nomeUsuario emailUsuario");

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


  // ATUALIZAR JORNADA
  async update(req, res) {
    try {
      const { id } = req.params;
      const { usuario } = req.body;

      const jornada = await JornadaModel.findById(id);

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      // só permite alterar o usuário (caso necessário)
      if (usuario !== undefined) {
        jornada.usuario = usuario;
      }

      // ❌ NÃO permite alterar XP nem nível manualmente
      // xp e nível só mudam no ProgressoController

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
