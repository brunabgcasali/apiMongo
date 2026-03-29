const TarefaRepository = require("../Repositories/TarefaRepository");
const ProgressoRepository = require("../Repositories/ProgressoRepository");

class ProgressoService {

  async iniciar(usuarioId, tarefaId) {


    const tarefa = await TarefaRepository.findById(tarefaId);

    if (!tarefa) {
      throw new Error("Tarefa não encontrada");
    }

    let progresso = await ProgressoRepository
      .findByUsuarioETarefa(usuarioId, tarefaId);

    if (progresso) {
      return progresso;
    }

    progresso = await ProgressoRepository.create(
      usuarioId,
      tarefaId,
      "liberado"
    );

    progresso.inicio = new Date();
    await ProgressoRepository.save(progresso);

    return progresso;

  }


  async responder(progressoId, questaoId, alternativaId) {

    const progresso = await ProgressoRepository.findById(progressoId);

    if (!progresso) {
      throw new Error("Progresso não encontrado");
    }

    const tarefa = progresso.tarefa;

    const questao = tarefa.questoes.id(questaoId);

    if (!questao) {
      throw new Error("Questão não encontrada");
    }

    const alternativa = questao.alternativas.id(alternativaId);

    if (!alternativa) {
      throw new Error("Alternativa não encontrada");
    }

    const correta = alternativa.correta;

    if (correta) {
      progresso.acertos++;
    }

    progresso.respostas.push({
      questaoId,
      alternativaId,
      correta
    });

    progresso.questaoAtual++;

    const totalQuestoes = tarefa.questoes.length;
    const terminou = progresso.questaoAtual >= totalQuestoes;

    if (terminou) {
      progresso.status = "concluido";
      progresso.fim = new Date();

      progresso.tempoTotal = Math.floor(
        (progresso.fim - progresso.inicio) / 1000
      );

    }

    await ProgressoRepository.save(progresso);

    if (terminou) {

      const totalQuestoes = tarefa.questoes.length;
      const erros = totalQuestoes - progresso.acertos;
      const percentual = Math.round((progresso.acertos / totalQuestoes) * 100);
      const xp = progresso.acertos * 10;

      return {
        terminou: true,
        estatisticas: {
          acertos: progresso.acertos,
          erros,
          total: totalQuestoes,
          percentual,
          xp,
          tempoTotal: progresso.tempoTotal
        }
      };
    }

    return {
      correta,
      terminou: false,
      proximaQuestao: tarefa.questoes[progresso.questaoAtual]
    };
  }

  async iniciarJornada(usuarioId) {

    const tarefas = await TarefaRepository.findAllOrdenadas();

    if (tarefas.length === 0) {
      throw new Error("Nenhuma tarefa cadastrada");
    }

    const progressos = await ProgressoRepository.findByUsuario(usuarioId);

    if (progressos.length > 0) {
      return progressos;
    }

    const resultado = [];

    for (let i = 0; i < tarefas.length; i++) {

      const tarefa = tarefas[i];

      const status = i === 0 ? "liberado" : "bloqueado";

      const progresso = await ProgressoRepository.create(
        usuarioId,
        tarefa._id,
        status
      );

      resultado.push(progresso);
    }

    return resultado;
  }


  async buscarProgresso(usuarioId) {

    const tarefas = await TarefaRepository.findAllOrdenadas();

    const progressos = await ProgressoRepository.findByUsuario(usuarioId);


    console.log("TAREFAS:", tarefas);
    console.log("PROGRESSOS:", progressos);

    const progressoMap = {};

    progressos.forEach(p => {
      progressoMap[p.tarefa.toString()] = p;
    });

    let ultimaLiberada = null;

    const tarefasFormatadas = tarefas.map(tarefa => {

      const progresso = progressoMap[tarefa._id.toString()];

      const status = progresso ? progresso.status : "bloqueado";

      if (status === "liberado") {
        ultimaLiberada = tarefa._id;
      }

      return {
        tarefaId: tarefa._id,
        titulo: tarefa.titulo,
        ordem: tarefa.ordem,
        status,
        acertos: progresso?.acertos || 0
      };

    });

    return {
      ultimaLiberada,
      tarefas: tarefasFormatadas
    };

  }

  async abandonar(progressoId) {

    const progresso = await ProgressoRepository.findById(progressoId);

    if (!progresso) {
      throw new Error("Progresso não encontrado");
    }

    if (progresso.status === "concluido") {
      throw new Error("Tarefa já foi concluída");
    }

    progresso.status = "abandonado";
    progresso.fim = new Date();

    await ProgressoRepository.save(progresso);

    return { message: "Tarefa abandonada com sucesso" };
  }

  async buscarEstatisticas(usuarioId) {

    const progressos = await ProgressoRepository.findByUsuario(usuarioId)
      .populate("tarefa");

    if (!progressos || progressos.length === 0) {
      throw new Error("Nenhum progresso encontrado");
    }

    let totalAcertos = 0;
    let totalErros = 0;
    let totalQuestoes = 0;

    let totalTempo = 0;
    let tarefasComTempo = 0;

    let concluidas = 0;
    let abandonadas = 0;

    progressos.forEach(p => {

      const totalQuestoesTarefa = p.tarefa?.questoes?.length || 0;

      const erros = totalQuestoesTarefa - p.acertos;

      totalAcertos += p.acertos;
      totalErros += erros;
      totalQuestoes += totalQuestoesTarefa;

      if (p.status === "concluido") {
        concluidas++;

        if (p.tempoTotal) {
          totalTempo += p.tempoTotal;
          tarefasComTempo++;
        }
      }

      if (p.status === "abandonado") {
        abandonadas++;
      }

    });

    const mediaAcertos = totalQuestoes > 0
      ? Math.round((totalAcertos / totalQuestoes) * 100)
      : 0;

    const tempoMedio = tarefasComTempo > 0
      ? Math.round(totalTempo / tarefasComTempo)
      : 0;

    return {
      totalAcertos,
      totalErros,
      mediaAcertos,
      tempoMedio,
      tarefasConcluidas: concluidas,
      tarefasAbandonadas: abandonadas
    };
  }
}

module.exports = new ProgressoService();