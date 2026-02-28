const TopicoModel = require("../Models/TopicoModel");

class TopicoController {

    async create(req, res) {
        try {
            const { curso, titulo, ordem } = req.body;

            if (!curso || !titulo || ordem === undefined) {
                return res.status(400).json({
                    message: "Preencha todos os campos obrigatórios."
                });
            }

            const topico = await TopicoModel.create(req.body);

            return res.status(201).json(topico);

        } catch (error) {

            // 🔥 Tratando erro de índice duplicado
            if (error.code === 11000) {
                return res.status(400).json({
                    message: "Já existe um tópico com essa ordem neste curso."
                });
            }

            return res.status(500).json({
                message: "Erro ao criar tópico.",
                error: error.message
            });
        }
    }


    async findAll(req, res) {
        try {
            const topicos = await TopicoModel
                .find()
                .populate("curso")
                .sort({ ordem: 1 });

            return res.status(200).json(topicos);

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar tópicos."
            });
        }
    }


    async findById(req, res) {
        try {
            const { id } = req.params;

            const topico = await TopicoModel
                .findById(id)
                .populate("curso");

            if (!topico) {
                return res.status(404).json({
                    message: "Tópico não encontrado."
                });
            }

            return res.status(200).json(topico);

        } catch {
            return res.status(400).json({
                message: "ID inválido."
            });
        }
    }


    async findByCurso(req, res) {
        try {
            const { cursoId } = req.params;

            const topicos = await TopicoModel
                .find({ curso: cursoId })
                .sort({ ordem: 1 });

            return res.status(200).json(topicos);

        } catch {
            return res.status(400).json({
                message: "Erro ao buscar tópicos por curso."
            });
        }
    }


    async update(req, res) {
        try {
            const { id } = req.params;

            const updatedTopico = await TopicoModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );

            if (!updatedTopico) {
                return res.status(404).json({
                    message: "Tópico não encontrado."
                });
            }

            return res.status(200).json(updatedTopico);

        } catch (error) {

            if (error.code === 11000) {
                return res.status(400).json({
                    message: "Já existe um tópico com essa ordem neste curso."
                });
            }

            return res.status(500).json({
                message: "Erro ao atualizar tópico."
            });
        }
    }


    async delete(req, res) {
        try {
            const { id } = req.params;

            const deleted = await TopicoModel.findByIdAndDelete(id);

            if (!deleted) {
                return res.status(404).json({
                    message: "Tópico não encontrado."
                });
            }

            return res.status(200).json({
                message: "Tópico deletado com sucesso."
            });

        } catch {
            return res.status(500).json({
                message: "Erro ao deletar tópico."
            });
        }
    }


    async createMany(req, res) {
        try {
            const { topicos } = req.body;

            if (!topicos || !Array.isArray(topicos)) {
                return res.status(400).json({
                    message: "Envie um array de tópicos."
                });
            }

            const createdTopicos = await TopicoModel.insertMany(topicos);

            return res.status(201).json(createdTopicos);

        } catch (error) {

            if (error.code === 11000) {
                return res.status(400).json({
                    message: "Existe ordem duplicada dentro do mesmo curso."
                });
            }

            return res.status(500).json({
                message: "Erro ao criar tópicos em lote.",
                error: error.message
            });
        }
    }

}



module.exports = new TopicoController();