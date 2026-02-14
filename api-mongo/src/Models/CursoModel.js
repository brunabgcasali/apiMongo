const mongoose = require('mongoose');

const { Schema } = mongoose;

const CursoSchema = new Schema({
    nomeCurso: {
        type: String,
        required: true},
    tarefasCurso: {
        type: String,
        required: true
    }})

    
        const CursoModel = mongoose.model('curso', CursoSchema);
        
        module.exports = CursoModel;