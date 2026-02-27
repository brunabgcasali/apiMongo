const mongoose = require('mongoose');

const { Schema } = mongoose;

const CursoSchema = new Schema({
    nomeCurso: {
        type: String,
        required: true
    },
    descricaoCurso: {
        type: String,
    },
    imagemCurso: {
        type: String,
    },
    ativo: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const CursoModel = mongoose.model('Curso', CursoSchema);

module.exports = CursoModel;