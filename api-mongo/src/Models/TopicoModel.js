const mongoose = require('mongoose');
const { Schema } = mongoose;

const TopicoSchema = new Schema({

  curso: {
    type: Schema.Types.ObjectId,
    ref: "Curso",
    required: true
  },

  titulo: {
    type: String,
    required: true
  },

  ordem: {
    type: Number,
    required: true
  }

}, { timestamps: true });

const TopicoModel = mongoose.model('Topico', TopicoSchema);

module.exports = TopicoModel;