const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    username: {
        type: String,
        required: true},
    nome: {
        type: String,
        required: true
    },
    sobrenome:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    dataDeCadastro: {
        type: Date,
        required: true
    }
    })