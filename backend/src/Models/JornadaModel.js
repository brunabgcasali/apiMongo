const mongoose = require("mongoose");
const { Schema } = mongoose;

const JornadaSchema = new Schema({

  nomeJornada: {
    type: String,
    trim: true
  },

  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },

  curso: {
    type: Schema.Types.ObjectId,
    ref: "Curso",
    required: true
  },

  dataInicio: {
    type: Date,
    default: Date.now
  },

  ultimaTarefaRealizada: {
  type: Schema.Types.ObjectId,
  ref: "Tarefa",
  default: null
},

  xpTotal: {
    type: Number,
    default: 0,
    min: 0
  },

  nivel: {
    type: Number,
    default: 1,
    min: 1
  },

  porcentagemConclusao: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }

}, {
  versionKey: false,
  timestamps: true
});

JornadaSchema.index(
  { usuario: 1, curso: 1 },
  { unique: true }
);

module.exports = mongoose.model("Jornada", JornadaSchema);