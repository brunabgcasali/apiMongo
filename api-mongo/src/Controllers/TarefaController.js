const TarefaService = require("../Services/TarefaService");

class TarefaController {

  async create(req, res) {

    try {

      const tarefa = await TarefaService.create(req.body);

      return res.status(201).json({
        message: "Tarefa criada com sucesso!",
        tarefa
      });

    } catch (error) {

      return res.status(400).json({
        message: error.message
      });

    }

  }

  async createComplete(req, res) {

    try {

      const tarefa = await TarefaService.createComplete(req.body);

      return res.status(201).json({
        message: "Tarefa completa criada com sucesso!",
        tarefa
      });

    } catch (error) {

      return res.status(400).json({
        message: error.message
      });

    }

  }

  async findAll(req, res) {

    try {

      const tarefas = await TarefaService.findAll(req.query.topico);

      return res.status(200).json(tarefas);

    } catch (error) {

      return res.status(500).json({
        message: "Erro ao buscar tarefas."
      });

    }

  }

  async findById(req, res) {

    try {

      const tarefa = await TarefaService.findById(req.params.id);

      return res.status(200).json(tarefa);

    } catch (error) {

      return res.status(404).json({
        message: error.message
      });

    }

  }

  async update(req, res) {

    try {

      const tarefa = await TarefaService.update(
        req.params.id,
        req.body
      );

      return res.status(200).json({
        message: "Tarefa atualizada com sucesso.",
        tarefa
      });

    } catch (error) {

      return res.status(400).json({
        message: error.message
      });

    }

  }

  async delete(req, res) {

    try {

      await TarefaService.delete(req.params.id);

      return res.status(200).json({
        message: "Tarefa deletada com sucesso."
      });

    } catch (error) {

      return res.status(404).json({
        message: error.message
      });

    }

  }

}

module.exports = new TarefaController();