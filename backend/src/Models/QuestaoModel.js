const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestaoSchema = new Schema({

  tarefa: {
    type: Schema.Types.ObjectId,
    ref: "Tarefa",
    required: true
  },

  enunciado: {
    type: String,
    required: true
  },

  ordem: {
    type: Number,
    required: true
  }

}, { timestamps: true });

QuestaoSchema.index(
  { tarefa: 1, ordem: 1 },
  { unique: true }
);

module.exports = mongoose.model("Questao", QuestaoSchema);