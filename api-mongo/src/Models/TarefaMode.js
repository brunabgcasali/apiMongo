const mongoose = require('mongoose');

const { Schema } = mongoose;

const TarefaSchema = new Schema({
    nomeTarefa: {
        type: String,
        required: true
    },
    questoesTarefa: {
        type: String,
        required: true
    },
    questaoCorretaTarefa: {
        type: String,
        required: true
    },
    topicoTarefa: {
        type: String,
        required: true
    }
})


const TarefaModel = mongoose.model('tarefa', TarefaSchema);

module.exports = TarefaModel;