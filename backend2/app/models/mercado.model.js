const mongoose = require('mongoose');
const MercadoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
      nombre_mercado: {
        type: String,
        required: true,
    },
      direccion_mercado: {
        type: String,
        required: true,
      }
})
module.exports = mongoose.model('Mercados', MercadoSchema)