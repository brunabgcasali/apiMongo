const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProgressoConteudoSchema = new Schema({

  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },

  conteudo: {
    type: Schema.Types.ObjectId,
    ref: "Conteudo",
    required: true
  },

  status: {
    type: String,
    enum: ["bloqueado", "em_aberto", "concluido"],
    default: "bloqueado"
  },

  visualizado: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

ProgressoConteudoSchema.index(
  { usuario: 1, conteudo: 1 },
  { unique: true }
);

module.exports = mongoose.model('ProgressoConteudo', ProgressoConteudoSchema);