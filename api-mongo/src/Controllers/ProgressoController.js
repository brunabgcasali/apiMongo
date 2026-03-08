const ProgressoService = require("../Services/ProgressoService");

class ProgressoController {

  async progressoInicial(req, res) {
    try {

      const usuarioId = req.user.id;

      const resultado = await ProgressoService.progressoInicial(usuarioId);

      return res.status(200).json(resultado);

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        message: "Erro ao buscar progresso inicial."
      });
    }
  }

  async responderQuestao(req, res) {
    try {

      const usuarioId = req.user.id;

      const { questaoId, alternativaId } = req.body;

      const resultado = await ProgressoService.responderQuestao(
        usuarioId,
        questaoId,
        alternativaId
      );

      return res.status(200).json(resultado);

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        message: error.message
      });
    }
  }

  async buscarProgresso(req, res) {

    try {

      const usuarioId = req.user.id;
      const { tarefaId } = req.params;

      const progresso = await ProgressoService.buscarProgresso(
        usuarioId,
        tarefaId
      );

      return res.json(progresso);

    } catch (error) {

      return res.status(404).json({
        message: error.message
      });

    }

  }

}

module.exports = new ProgressoController();