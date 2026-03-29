const ProgressoJornada = require('../models/ProgressoJornada');

class ProgressoJornadaRepository {

  async findByUsuario(usuario) {
    return await ProgressoJornada.findOne({ usuario });
  }

  async update(id, data) {
    return await ProgressoJornada.findByIdAndUpdate(id, data, { new: true });
  }

}

module.exports = new ProgressoJornadaRepository();