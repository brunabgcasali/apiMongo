const TarefaRepository = require("../Repositories/TarefaRepository");
const ProgressoTarefaRepository = require("../Repositories/ProgressoTarefaRepository");
const ProgressoJornadaService = require("./ProgressoJornadaService");

class ProgressoTarefaService {

  async iniciar(usuarioId, tarefaId) {

    const tarefa = await TarefaRepository.findById(tarefaId);
    if (!tarefa) throw new Error("Tarefa não encontrada");

    // 🔐 valida desbloqueio
    await ProgressoJornadaService.validarAcesso(usuarioId, tarefa);

    let progresso = await ProgressoTarefaRepository
      .findByUsuarioETarefa(usuarioId, tarefaId);

    if (progresso) return progresso;

    progresso = await ProgressoTarefaRepository.create({
      usuario: usuarioId,
      tarefa: tarefaId,
      status: "em_andamento",
      inicio: new Date()
    });

    return progresso;
  }

  async responder(progressoId, questaoId, alternativaId) {

    const progresso = await ProgressoTarefaRepository.findById(progressoId)
      .populate("tarefa");

    if (!progresso) throw new Error("Progresso não encontrado");

    const tarefa = progresso.tarefa;
    const questao = tarefa.questoes.id(questaoId);
    if (!questao) throw new Error("Questão não encontrada");

    const alternativa = questao.alternativas.id(alternativaId);
    if (!alternativa) throw new Error("Alternativa não encontrada");

    const correta = alternativa.correta;

    if (correta) progresso.acertos++;

    progresso.respostas.push({ questaoId, alternativaId, correta });
    progresso.questaoAtual++;

    const terminou = progresso.questaoAtual >= tarefa.questoes.length;

    if (terminou) {
      return await this.finalizar(progresso);
    }

    await progresso.save();

    return {
      correta,
      terminou: false,
      proximaQuestao: tarefa.questoes[progresso.questaoAtual]
    };
  }

  async finalizar(progresso) {

    progresso.status = "concluida";
    progresso.fim = new Date();

    progresso.tempoTotal = Math.floor(
      (progresso.fim - progresso.inicio) / 1000
    );

    await progresso.save();

    const total = progresso.tarefa.questoes.length;
    const erros = total - progresso.acertos;
    const percentual = Math.round((progresso.acertos / total) * 100);
    const xp = progresso.acertos * 10;

    // 🔥 atualiza jornada
    await ProgressoJornadaService.atualizarAposConclusao(
      progresso.usuario,
      progresso.tarefa._id,
      xp
    );

    return {
      terminou: true,
      estatisticas: {
        acertos: progresso.acertos,
        erros,
        total,
        percentual,
        xp,
        tempoTotal: progresso.tempoTotal
      }
    };
  }

  async abandonar(progressoId) {

    const progresso = await ProgressoTarefaRepository.findById(progressoId);

    if (!progresso) throw new Error("Progresso não encontrado");
    if (progresso.status === "concluida") {
      throw new Error("Tarefa já foi concluída");
    }

    progresso.status = "abandonada";
    progresso.fim = new Date();

    await progresso.save();

    await ProgressoJornadaService.registrarAbandono(progresso.usuario);

    return { message: "Tarefa abandonada" };
  }

}

module.exports = new ProgressoTarefaService();