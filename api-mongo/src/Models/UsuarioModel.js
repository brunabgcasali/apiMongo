const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
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

    const UsuarioModel = mongoose.model('usuario', UsuarioSchema);
    
    module.exports = UsuarioModel;