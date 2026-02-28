const mongoose = require('mongoose');
const { Schema } = mongoose;

const TarefaSchema = new Schema({
  
  topico: {
    type: Schema.Types.ObjectId,
    ref: "Topico",
    required: true
  },


  titulo: {
    type: String,
    required: true,
    trim: true
  },

  ordem: {
    type: Number,
    required: true
  },

  dificuldade: {
    type: String,
    enum: ["facil", "medio", "dificil"],
    required: true
  }

}, { timestamps: true });

TarefaSchema.index(
  { topico: 1, ordem: 1 },
  { unique: true }
);

module.exports = mongoose.model("Tarefa", TarefaSchema);