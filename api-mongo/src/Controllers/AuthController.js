const jwt = require('jsonwebtoken');
const Usuario = require('../Models/UsuarioModel');

class AuthController {
  async login(req, res) {
    const { emailUsuario, senhaUsuario } = req.body;

    const usuario = await Usuario.findOne({ emailUsuario });

    if (!usuario) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    if (usuario.senhaUsuario !== senhaUsuario) {
      return res.status(400).json({ message: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: usuario._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.json({
      usuario,
      token
    });
  }
}

module.exports = new AuthController();