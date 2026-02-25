const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestaoSchema = new Schema({
    enunciado: {
        type: String,
        required: true
    },
    alternativas: {
        type: [String],
        required: true
    },
    correta: {
        type: Number,
        required: true
    }
});

const QuestaoModel = mongoose.model('questao', QuestaoSchema);
module.exports = QuestaoModel;
