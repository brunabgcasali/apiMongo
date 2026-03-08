const TarefaRepository = require("../Repositories/TarefaRepository");

class TarefaService {

  async create(data) {

    const { titulo, topico, ordem, dificuldade, questoes } = data;

    if (!titulo || !topico || !ordem || !dificuldade) {
      throw new Error("Título, tópico, ordem e dificuldade são obrigatórios.");
    }

    if (!Array.isArray(questoes) || questoes.length === 0) {
      throw new Error("A tarefa deve possuir pelo menos uma questão.");
    }

    return TarefaRepository.create(data);
  }

  async createComplete(data) {

    const { titulo, topico, ordem, dificuldade, questoes } = data;

    if (!titulo || !topico || !ordem || !dificuldade) {
      throw new Error("Título, tópico, ordem e dificuldade são obrigatórios.");
    }

    if (!Array.isArray(questoes) || questoes.length !== 5) {
      throw new Error("A tarefa deve conter exatamente 5 questões.");
    }

    let xpPorQuestao = 0;

    if (dificuldade === "facil") xpPorQuestao = 5;
    if (dificuldade === "medio") xpPorQuestao = 10;
    if (dificuldade === "dificil") xpPorQuestao = 20;

    if (xpPorQuestao === 0) {
      throw new Error("Dificuldade inválida. Use: facil, medio ou dificil.");
    }

    for (const q of questoes) {

      if (!q.enunciado) {
        throw new Error("Todas as questões devem possuir enunciado.");
      }

      if (!Array.isArray(q.alternativas) || q.alternativas.length !== 4) {
        throw new Error("Cada questão deve ter exatamente 4 alternativas.");
      }

      const corretas = q.alternativas.filter(a => a.correta === true);

      if (corretas.length !== 1) {
        throw new Error("Cada questão deve possuir exatamente uma alternativa correta.");
      }

    }

    return TarefaRepository.create({
      titulo,
      topico,
      ordem,
      dificuldade,
      xpTotal: xpPorQuestao * 5,
      questoes
    });

  }

  async findAll(topico) {

    let filtro = {};

    if (topico) {
      filtro.topico = topico;
    }

    return TarefaRepository.findAll(filtro);
  }

  async findById(id) {

    const tarefa = await TarefaRepository.findById(id);

    if (!tarefa) {
      throw new Error("Tarefa não encontrada.");
    }

    return tarefa;
  }

  async update(id, data) {

    const tarefa = await TarefaRepository.update(id, data);

    if (!tarefa) {
      throw new Error("Tarefa não encontrada.");
    }

    return tarefa;
  }

  async delete(id) {

    const tarefa = await TarefaRepository.delete(id);

    if (!tarefa) {
      throw new Error("Tarefa não encontrada.");
    }

    return true;
  }

}

module.exports = new TarefaService();