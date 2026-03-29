const ProgressoTarefa = require('../models/ProgressoTarefa');

class ProgressoTarefaRepository {

  async create(data) {
    return await ProgressoTarefa.create(data);
  }

  async findByUsuarioETarefa(usuario, tarefa) {
    return await ProgressoTarefa.findOne({ usuario, tarefa });
  }

  async update(id, data) {
    return await ProgressoTarefa.findByIdAndUpdate(id, data, { new: true });
  }

}

module.exports = new ProgressoTarefaRepository();