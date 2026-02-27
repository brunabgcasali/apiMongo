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
  },

  questoes: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Questao"
    }]}

}, { timestamps: true });

const TarefaModel = mongoose.model('Tarefa', TarefaSchema);

module.exports = TarefaModel;