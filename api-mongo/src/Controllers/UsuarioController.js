const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {
  async create(req, res) {
    const {usernameUsuario, nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, dataDeCadastroUsuario} = req.body;
    if (!usernameUsuario || !nomeUsuario || !sobrenomeUsuario || !emailUsuario || !senhaUsuario || !dataDeCadastroUsuario){
        return res.status(400).json({message: "Falha ao salvar, preencha todos os campos obrigatórios."});
    }
    const createdUsuario = await UsuarioModel.create(req.body);

    return res.status(200).json(createdUsuario);
  }

  async findById(req, res) {
    const usuario = await UsuarioModel.find();

    return res.status(200).json(usuario);
  }

  async findAll(req, res) {
    try {
      const { id } = req.params;

      const usuario = await UsuarioModel.findById(id);

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(404).json({ message: "Formato de busca inválido." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await UsuarioModel.findByIdAndUpdate(id, req.body);

      return res.status(200).json({ nessage: "Usuario atualizado com sucesso." });
    } catch {
      return res.status(404).json({ message: "Falha ao atualizar o usuário." });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const usuarioDeleted = await UsuarioModel.findByIdAndDelete(id);

      if (!usuarioDeleted) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      return res.status(200).json({ message: "Usuário deletado com sucesso." });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "Falha ao deletar o usuário." });
    }
  }
}

module.exports = new UsuarioController();
