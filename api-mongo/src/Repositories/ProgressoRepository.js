const ProgressoTarefaModel = require("../Models/ProgressoTarefaModel");

class ProgressoRepository {

  async findByUsuario(usuarioId) {
    return ProgressoTarefaModel.find({
      usuario: usuarioId
    });
  }

  async find(usuarioId, tarefaId) {
    return ProgressoTarefaModel.findOne({
      usuario: usuarioId,
      tarefa: tarefaId
    });
  }

  async create(usuarioId, tarefaId, status = "bloqueado") {
    return ProgressoTarefaModel.create({
      usuario: usuarioId,
      tarefa: tarefaId,
      status
    });
  }

  async save(progresso) {
    return progresso.save();
  }

  async liberar(usuarioId, tarefaId) {
    return ProgressoTarefaModel.findOneAndUpdate(
      { usuario: usuarioId, tarefa: tarefaId },
      { status: "liberado" },
      { upsert: true }
    );
  }

}

module.exports = new ProgressoRepository();