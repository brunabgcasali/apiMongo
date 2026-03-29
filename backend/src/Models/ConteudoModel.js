const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConteudoSchema = new Schema({

  topico: {
    type: Schema.Types.ObjectId,
    ref: "Topico",
    required: true,
    unique: true
  },

  texto: {
    type: String,
    required: true
  }

}, { timestamps: true });


const ConteudoModel = mongoose.model('Conteudo', ConteudoSchema);

module.exports = ConteudoModel; 