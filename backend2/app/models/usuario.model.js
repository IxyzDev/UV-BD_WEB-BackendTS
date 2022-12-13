const mongoose = require('mongoose');
const UsuarioSchema = new mongoose.Schema({
    rut_usuario: {
        type: String,
        required: true,
    },
    nombre_usuario: {
        type: String,
        required: true,
    },
      contraseña_usuario: {
        type: String,
        required: true,
    },
      correo_usuario: {
        type: String,
        required: true,
    },
      direccion_usuario: {
        type: String,
        required: true,
    }         
})
module.exports = mongoose.model('Usuarios', UsuarioSchema)