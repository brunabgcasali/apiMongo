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
    required: true,
    trim: true
  },

  ordem: {
    type: Number,
    required: true,
    min: 1
  }

}, { timestamps: true });

TopicoSchema.index(
  { curso: 1, ordem: 1 },
  { unique: true }
);

const TopicoModel = mongoose.model('Topico', TopicoSchema);

module.exports = TopicoModel;