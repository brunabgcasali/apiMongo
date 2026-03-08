const TarefaRepository = require("../Repositories/TarefaRepository");
const ProgressoRepository = require("../Repositories/ProgressoRepository");
const QuestaoRepository = require("../Repositories/QuestaoRepository");

class ProgressoService {

  async progressoInicial(usuarioId) {

    const tarefas = await TarefaRepository.findAllOrdenadas();

    if (tarefas.length === 0) {
      return { tarefas: [] };
    }

    const progressos = await ProgressoRepository.findByUsuario(usuarioId);

    const progressoMap = {};

    progressos.forEach(p => {
      progressoMap[p.tarefa.toString()] = p;
    });

    let liberarProxima = true;
    const resultado = [];

    for (const tarefa of tarefas) {

      let progresso = progressoMap[tarefa._id.toString()];

      if (!progresso) {
        progresso = await ProgressoRepository.create(
          usuarioId,
          tarefa._id,
          "bloqueado"
        );
      }

      if (liberarProxima) {
        if (progresso.status !== "concluido") {
          progresso.status = "liberado";
          await ProgressoRepository.save(progresso);
          liberarProxima = false;
        }
      }

      if (progresso.status !== "concluido") {
        liberarProxima = false;
      }

      resultado.push({
        tarefaId: tarefa._id,
        titulo: tarefa.titulo,
        ordem: tarefa.ordem,
        status: progresso.status,
        porcentagem: progresso.porcentagem
      });
    }

    const ultimaLiberada = resultado.find(t => t.status === "liberado");

    return {
      ultimaLiberada: ultimaLiberada?.tarefaId || null,
      tarefas: resultado
    };
  }

  async responderQuestao(usuarioId, tarefaId, questaoId, alternativaId) {

    console.log("TarefaId recebido:", tarefaId);

    const tarefa = await TarefaRepository.findById(tarefaId);

    console.log("TarefaId recebido:", tarefaId);
    console.log("Resultado da busca:", tarefa);

    if (!tarefa) {
      throw new Error("Tarefa não encontrada");
    }

    const questao = tarefa.questoes.id(questaoId);

    if (!questao) {
      throw new Error("Questão não encontrada");
    }

    let progresso = await ProgressoRepository.find(usuarioId, tarefaId);

    if (!progresso) {
      progresso = await ProgressoRepository.create(
        usuarioId,
        tarefaId,
        "liberado"
      );
    }

    progresso.tentativas += 1;

    const alternativaCorreta = questao.alternativas.find(a => a.correta);

    if (alternativaCorreta._id.toString() === alternativaId) {
      progresso.acertos += 1;
    } else {
      progresso.erros += 1;
    }

    const totalQuestoes = tarefa.questoes.length;

    progresso.porcentagem = Math.round(
      (progresso.acertos / totalQuestoes) * 100
    );

    await ProgressoRepository.save(progresso);

    const totalRespondidas = progresso.acertos + progresso.erros;

    if (totalRespondidas >= totalQuestoes) {

      const passou = progresso.porcentagem >= 60;

      if (passou) {

        progresso.status = "concluido";
        await ProgressoRepository.save(progresso);

        const proximaTarefa = await TarefaRepository.findProxima(
          tarefa.topico,
          tarefa.ordem
        );

        if (proximaTarefa) {
          await ProgressoRepository.liberar(
            usuarioId,
            proximaTarefa._id
          );
        }
      }

      const xp = progresso.acertos * 10;

      return {
        tarefaFinalizada: true,
        passou,
        estatisticas: {
          acertos: progresso.acertos,
          erros: progresso.erros,
          porcentagem: progresso.porcentagem,
          xp
        }
      };
    }

    return {
      tarefaFinalizada: false,
      acertos: progresso.acertos,
      erros: progresso.erros
    };
  }

  async buscarProgresso(usuarioId, tarefaId) {

    const progresso = await ProgressoRepository.find(usuarioId, tarefaId);

    if (!progresso) {
      throw new Error("Progresso não encontrado para essa tarefa.");
    }

    return progresso;
  }


}

module.exports = new ProgressoService();