const ProgressoJornadaRepository = require("../Repositories/ProgressoJornadaRepository");

class ProgressoJornadaService {

  async validarAcesso(usuarioId, tarefa) {

    const jornada = await ProgressoJornadaRepository.findByUsuario(usuarioId);

    if (tarefa.ordem > jornada.tarefasConcluidas + 1) {
      throw new Error("Tarefa bloqueada");
    }
  }

  async atualizarAposConclusao(usuarioId, tarefaId, xp) {

    const jornada = await ProgressoJornadaRepository.findByUsuario(usuarioId);

    jornada.tarefasConcluidas += 1;
    jornada.xpTotal += xp;
    jornada.ultimaTarefa = tarefaId;

    if (jornada.xpTotal >= jornada.nivel * 100) {
      jornada.nivel++;
    }

    await jornada.save();
  }

  async registrarAbandono(usuarioId) {

    const jornada = await ProgressoJornadaRepository.findByUsuario(usuarioId);

    jornada.tarefasAbandonadas += 1;

    await jornada.save();
  }

}

module.exports = new ProgressoJornadaService();