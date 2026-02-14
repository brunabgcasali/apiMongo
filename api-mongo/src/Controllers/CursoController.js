const CursoModel = require("../Models/CursoModel");

class CursoController {

    async create(req, res) {
        const { nomeCurso, tarefasCurso } = req.body;

        if (!nomeCurso || !tarefasCurso ) {
            return res.status(400).json({ message: "Falha ao salvar, preencha todos os campos obrigatórios." });
        }

        const createdCurso = await CursoModel.create(req.body);

        return res.status(200).json(createdCurso);

    }

    async findAll(req, res) {
        const cursos = await CursoModel.find();

        return res.status(200).json(cursos);

    }

    async findById(req, res) {
        try {
            const { id } = req.params;

            const curso = await CursoModel.findById(id);

            if (!curso) {
                return res.status(404).json({ message: "Curso não encontrado." });
            }

            return res.status(200).json(curso);
        } catch (error) {
            return res.status(404).json({ message: "Formato de busca inválido." });
        }

    }

    async update(req, res) {
        try {
            const { id } = req.params;

            await CursoModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Curso atualizado com sucesso." });
        } catch {
            return res.status(404).json({ message: "Falha ao atualizar o curso." });
        }

    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            const cursoDeleted = await CursoModel.findByIdAndDelete(id);

            if (!cursoDeleted) {
                return res.status(404).json({ message: "Curso não encontrado." });
            }

            return res.status(200).json({ message: "Curso deletado com sucesso." });
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: "Falha ao deletar o curso." });
        }

    }
}

module.exports = new CursoController();