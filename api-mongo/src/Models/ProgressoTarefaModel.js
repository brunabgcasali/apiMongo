const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProgressoTarefaSchema = new Schema({

  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },

  tarefa: {
    type: Schema.Types.ObjectId,
    ref: "Tarefa",
    required: true
  },

  acertos: {
    type: Number,
    default: 0
  },

  erros: {
    type: Number,
    default: 0
  },

  tentativas: {
    type: Number,
    default: 0
  },

  desistencias: {
    type: Number,
    default: 0
  },

  porcentagem: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    enum: ["bloqueado", "liberado", "concluido"],
    default: "bloqueado"
  }

}, { timestamps: true });

ProgressoTarefaSchema.index(
  { usuario: 1, tarefa: 1 },
  { unique: true }
);

module.exports = mongoose.model('ProgressoTarefa', ProgressoTarefaSchema);