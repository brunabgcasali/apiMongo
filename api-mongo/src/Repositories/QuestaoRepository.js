const QuestaoModel = require("../Models/QuestaoModel");

class QuestaoRepository {

  async findById(id) {
    return QuestaoModel.findById(id);
  }

  async findByTarefa(tarefaId) {
    return QuestaoModel.find({ tarefa: tarefaId });
  }

  async countByTarefa(tarefaId) {
    return QuestaoModel.countDocuments({ tarefa: tarefaId });
  }

}

module.exports = new QuestaoRepository();