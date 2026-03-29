const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProgressoCursoSchema = new Schema({

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

  xpTotal: {
    type: Number,
    default: 0
  },

  nivel: {
    type: Number,
    default: 1
  },

  porcentagemCurso: {
    type: Number,
    default: 0
  },

  concluido: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

const ProgressoCursoModel = mongoose.model('ProgressoCurso', ProgressoCursoSchema);

module.exports = ProgressoCursoModel;