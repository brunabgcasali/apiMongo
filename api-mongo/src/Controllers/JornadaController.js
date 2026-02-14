const JornadaModel = require("../Models/JornadaModel");

class JornadaController {


    async create(req, res) {
        const { dataInicio, qtdXP } = req.body;

        if (!dataInicio || !qtdXP ) {
            return res.status(400).json({ message: "Falha ao salvar, preencha todos os campos obrigatórios." });
        }

        const createdJornada = await JornadaModel.create(req.body);

        return res.status(200).json(createdJornada);

    }


    async findAll(req, res) {
        const jornadas = await JornadaModel.find();

        return res.status(200).json(jornadas);


    }


    async findById(req, res) {
        try {
            const { id } = req.params;

            const jornada = await JornadaModel.findById(id);

            if (!jornada) {
                return res.status(404).json({ message: "Jornada não encontrada." });
            }

            return res.status(200).json(jornada);
        } catch (error) {
            return res.status(404).json({ message: "Formato de busca inválido." });
        }

    }


    async update(req, res) {
        try {
            const { id } = req.params;

            await JornadaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Jornada atualizada com sucesso." });
        } catch {
            return res.status(404).json({ message: "Falha ao atualizar a jornada." });
        }

    }


    async delete(req, res) {
        try {
            const { id } = req.params;

            const jornadaDeleted = await JornadaModel.findByIdAndDelete(id);

            if (!jornadaDeleted) {
                return res.status(404).json({ message: "Jornada não encontrada." });
            }

            return res.status(200).json({ message: "Jornada deletada com sucesso." });
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: "Falha ao deletar a jornada." });
        }

    }
}

module.exports = new JornadaController();
