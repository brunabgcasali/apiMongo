const TarefaModel = require("../Models/TarefaModel");

class TarefaRepository {

  async create(data) {
    return TarefaModel.create(data);
  }

  async findAll(filtro) {
    return TarefaModel
      .find(filtro)
      .sort({ topico: 1, ordem: 1 });
  }

  async findById(id) {
    return await TarefaModel.findById(id);
  }

  async update(id, data) {
    return TarefaModel.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  }

  async delete(id) {
    return TarefaModel.findByIdAndDelete(id);
  }

  async findAllOrdenadas() {
    return await TarefaModel.find().sort({ ordem: 1 });
  }

}

module.exports = new TarefaRepository();