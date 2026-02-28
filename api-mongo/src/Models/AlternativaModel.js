const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlternativaSchema = new Schema({

  questao: {
    type: Schema.Types.ObjectId,
    ref: "Questao",
    required: true
  },

  texto: {
    type: String,
    required: true
  },

  correta: {
    type: Boolean,
    default: false
  },

  ordem: {
    type: Number,
    required: true
  }

}, { timestamps: true });

AlternativaSchema.index(
  { questao: 1, ordem: 1 },
  { unique: true }
);

module.exports = mongoose.model("Alternativa", AlternativaSchema);