const JornadaModel = require("../Models/JornadaModel");

class JornadaController {

  async findAll(req, res) {
    try {
      const jornadas = await JornadaModel.find();

      return res.status(200).json(jornadas);

    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;

      const jornada = await JornadaModel.findById(id);

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      return res.status(200).json(jornada);

    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  async create(req, res) {
    try {

      const { nomeJornada, curso } = req.body;

      if (!curso) {
        return res.status(400).json({
          message: "Curso é obrigatório."
        });
      }

      const usuario = req.user.id;

      const novaJornada = await JornadaModel.create({
        nomeJornada,
        usuario,
        curso
      });

      return res.status(201).json(novaJornada);

    } catch (error) {

      if (error.code === 11000) {
        return res.status(400).json({
          message: "Usuário já possui jornada neste curso."
        });
      }

      return res.status(500).json({
        message: "Erro ao criar jornada."
      });
    }
  }


  async update(req, res) {
    try {

      const { id } = req.params;
      const dadosAtualizados = req.body;

      const jornada = await JornadaModel.findByIdAndUpdate(
        id,
        dadosAtualizados,
        { new: true }
      );

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      return res.status(200).json(jornada);

    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar jornada."
      });
    }
  }

  async delete(req, res) {
    try {

      const { id } = req.params;

      const jornada = await JornadaModel.findByIdAndDelete(id);

      if (!jornada) {
        return res.status(404).json({
          message: "Jornada não encontrada."
        });
      }

      return res.status(200).json({
        message: "Jornada deletada com sucesso."
      });

    } catch (error) {
      return res.status(500).json({
        message: "Erro ao deletar jornada."
      });
    }
  }

}

module.exports = new JornadaController();