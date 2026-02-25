const mongoose = require('mongoose');
const { Schema } = mongoose;

const TarefaSchema = new Schema({
    enunciado: {
        type: String,
        required: true
    },
    questoesTarefa: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "questao"
        }],
        default: []
    },

    topicoTarefa: {
        type: Number,
        required: true
    }
});

const TarefaModel = mongoose.model('tarefa', TarefaSchema);

module.exports = TarefaModel;
