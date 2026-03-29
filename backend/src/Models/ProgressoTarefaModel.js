const mongoose = require('mongoose');

const ProgressoTarefaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  tarefa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tarefa',
    required: true
  },

  questaoAtual: {
    type: Number,
    default: 0
  },

  acertos: {
    type: Number,
    default: 0
  },

  erros: {
    type: Number,
    default: 0
  },

  tempoTotal: {
    type: Number, // segundos
    default: 0
  },

  status: {
    type: String,
    enum: ['em_andamento', 'concluida', 'abandonada'],
    default: 'em_andamento'
  }

}, { timestamps: true });

module.exports = mongoose.model('ProgressoTarefa', ProgressoTarefaSchema);