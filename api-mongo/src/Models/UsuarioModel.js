const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({

  usernameUsuario: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  nomeUsuario: {
    type: String,
    required: true,
    trim: true
  },

  sobrenomeUsuario: {
    type: String,
    required: true,
    trim: true
  },

  emailUsuario: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  senhaUsuario: {
    type: String,
    required: true,
    select: false
  }

}, {
  timestamps: true,
  versionKey: false
});


module.exports = mongoose.model('Usuario', UsuarioSchema);