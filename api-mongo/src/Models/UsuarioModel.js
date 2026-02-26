const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usernameUsuario: {
        type: String,
        required: true},
    nomeUsuario: {
        type: String,
        required: true
    },
    sobrenomeUsuario:{
        type: String,
        required: true
    },
    emailUsuario: {
        type: String,
        required: true
    },
    senhaUsuario: {
        type: String,
        required: true
    },
    dataDeCadastroUsuario: {
        type: Date,
        required: true
    }
    })

const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;