const TarefaModel = require("../Models/TarefaModel");

class TarefaController {
  async create(req, res) {
    const {nomeTarefa, questoesTarefa, questaoCorretaTarefa, topicoTarefa} = req.body;
    if (!nomeTarefa || !questoesTarefa || !questaoCorretaTarefa || !topicoTarefa){
        return res.status(400).json({message: "Falha ao salvar, preencha todos os campos obrigatórios."});
    }
    const createdTarefa = await TarefaModel.create(req.body);

    return res.status(200).json(createdTarefa);
  }

  async findById(req, res) {
    const Tarefa = await TarefaModel.find();

    return res.status(200).json(tarefa);
  }

  async findAll(req, res) {
    try {
      const { id } = req.params;

      const tarefa = await TarefaModel.findById(id);

      if (!TransformStreamDefaultController) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json(tarefa);
    } catch (error) {
      return res.status(404).json({ message: "Formato de busca inválido." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await TarefaModel.findByIdAndUpdate(id, req.body);

      return res.status(200).json({ nessage: "Tarefa atualizado com sucesso." });
    } catch {
      return res.status(404).json({ message: "Falha ao atualizar o usuário." });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const tarefaDeleted = await tarefaModel.findByIdAndDelete(id);

      if (!tarefaDeleted) {
        return res.status(404).json({ message: "Tarefa não encontrado." });
      }

      return res.status(200).json({ message: "Tarefa deletado com sucesso." });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "Falha ao deletar o tarefa." });
    }
  }
}

module.exports = new TarefaController();
