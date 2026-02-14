const mongoose = require('mongoose');

const { Schema } = mongoose;

const JornadaSchema = new Schema({
    dataInicio: {
        type: Date,
        required: true},
    qtdXP: {
        type: Number,
        required: true
    }})

    
        const JornadaModel = mongoose.model('jornada', JornadaSchema);
        
        module.exports = JornadaModel;