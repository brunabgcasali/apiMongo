const ProgressoTarefaModel = require("../Models/ProgressoTarefaModel");

class ProgressoRepository {

  async findByUsuario(usuarioId) {
    return await ProgressoTarefaModel.find({ usuario: usuarioId });
  }

  async findByUsuarioETarefa(usuarioId, tarefaId) {
    return await ProgressoTarefaModel.findOne({
      usuario: usuarioId,
      tarefa: tarefaId
    });
  }

  async findById(progressoId) {
    return await ProgressoTarefaModel
      .findById(progressoId)
      .populate("tarefa");
  }

  async create(usuarioId, tarefaId, status) {

    return await ProgressoTarefaModel.create({
      usuario: usuarioId,
      tarefa: tarefaId,
      status,
      questaoAtual: 0,
      acertos: 0
    });

  }

  async save(progresso) {
    return await progresso.save();
  }

}

module.exports = new ProgressoRepository();