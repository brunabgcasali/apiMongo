const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsuarioModel = require("../Models/UsuarioModel");

class AuthController {

  async login(req, res) {
    try {
      const { emailUsuario, senhaUsuario } = req.body;

      const usuario = await UsuarioModel
        .findOne({ emailUsuario })
        .select("+senhaUsuario");

      if (!usuario) {
        return res.status(400).json({ message: "Usuário não encontrado." });
      }

      const senhaValida = await bcrypt.compare(
        senhaUsuario,
        usuario.senhaUsuario
      );

      if (!senhaValida) {
        return res.status(400).json({ message: "Senha inválida." });
      }

      const token = jwt.sign(
        { id: usuario._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({ token });

    } catch (error) {
      return res.status(400).json({ message: "Erro no login." });
    }
  }
}

module.exports = new AuthController();