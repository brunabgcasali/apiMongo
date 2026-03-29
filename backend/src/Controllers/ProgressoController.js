const ProgressoService = require("../Services/ProgressoService");

class ProgressoController {

  async iniciar(req, res) {

    try {

      const usuarioId = req.user.id;
      const { tarefaId } = req.params;

      const progresso = await ProgressoService.iniciar(
        usuarioId,
        tarefaId
      );

      return res.json(progresso);

    } catch (error) {

      return res.status(400).json({
        error: error.message
      });

    }

  }

  async responder(req, res) {

    try {

      const { progressoId, questaoId, alternativaId } = req.body;

      const resultado = await ProgressoService.responder(
        progressoId,
        questaoId,
        alternativaId
      );

      return res.json(resultado);

    } catch (error) {

      return res.status(400).json({
        error: error.message
      });

    }

  }

  async iniciarJornada(req, res) {

    try {

      const usuarioId = req.user.id;

      const progresso = await ProgressoService.iniciarJornada(usuarioId);

      return res.json(progresso);

    } catch (error) {

      return res.status(400).json({
        error: error.message
      });

    }

  }


  async buscarProgresso(req, res) {

    try {

      const usuarioId = req.user.id;

      const progresso = await ProgressoService.buscarProgresso(usuarioId);

      return res.json(progresso);

    }

    catch (error) {

      return res.status(500).json({
        message: error.message
      });


    }
  }

  async abandonar(req, res) {
    try {
      const { progressoId } = req.params;

      const result = await ProgressoService.abandonar(progressoId);

      return res.json(result);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async estatisticas(req, res) {
    try {

      const usuarioId = req.user.id; // vem do token

      const dados = await ProgressoService.buscarEstatisticas(usuarioId);

      return res.json(dados);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

}

module.exports = new ProgressoController();