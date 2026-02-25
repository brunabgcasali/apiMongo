const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProgressoSchema = new Schema({

  jornada: {
    type: Schema.Types.ObjectId,
    ref: "jornada",
    required: true
  },

  tarefa: {
    type: Schema.Types.ObjectId,
    ref: "tarefa",
    required: true
  },

  questao: {
    type: Schema.Types.ObjectId,
    ref: "questao",
    required: true
  },

  acertou: {
    type: Boolean,
    required: true
  },

  tentativas: {
    type: Number,
    default: 1
  },

  respondidoEm: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("progresso", ProgressoSchema);
