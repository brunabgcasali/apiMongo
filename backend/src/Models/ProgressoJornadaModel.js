const mongoose = require('mongoose');

const ProgressoJornadaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
    unique: true
  },

  tarefasConcluidas: {
    type: Number,
    default: 0
  },

  tarefasAbandonadas: {
    type: Number,
    default: 0
  },

  xpTotal: {
    type: Number,
    default: 0
  },

  nivel: {
    type: Number,
    default: 1
  },

  ultimaTarefa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tarefa'
  }

}, { timestamps: true });

module.exports = mongoose.model('ProgressoJornada', ProgressoJornadaSchema);