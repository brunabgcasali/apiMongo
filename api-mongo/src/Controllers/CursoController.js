const Curso = require('../Models/CursoModel');

class CursoController {

  static async create(req, res) {
    try {
      const { nomeCurso, descricaoCurso, imagemCurso } = req.body;

      const novoCurso = new Curso({
        nomeCurso,
        descricaoCurso,
        imagemCurso
      });

      await novoCurso.save();

      return res.status(201).json(novoCurso);

    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }


  static async findAll(req, res) {
    try {
      const cursos = await Curso.find({ ativo: true });

      return res.status(200).json(cursos);

    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }


  static async findById(req, res) {
    try {
      const { id } = req.params;

      const curso = await Curso.findById(id);

      if (!curso) {
        return res.status(404).json({ mensagem: "Curso não encontrado" });
      }

      return res.status(200).json(curso);

    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }


  static async update(req, res) {
    try {
      const { id } = req.params;

      const cursoAtualizado = await Curso.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!cursoAtualizado) {
        return res.status(404).json({ mensagem: "Curso não encontrado" });
      }

      return res.status(200).json(cursoAtualizado);

    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }


  static async delete(req, res) {
    try {
      const { id } = req.params;

      const curso = await Curso.findByIdAndUpdate(
        id,
        { ativo: false },
        { new: true }
      );

      if (!curso) {
        return res.status(404).json({ mensagem: "Curso não encontrado" });
      }

      return res.status(200).json({
        mensagem: "Curso desativado com sucesso"
      });

    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

}

module.exports = CursoController;