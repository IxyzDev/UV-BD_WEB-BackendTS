const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
      nombre_producto: {
        type: String,
        required: true,
    },
      marca_producto: {
        type: String,
        required: true,
    },
      tipo_producto: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Productos', ProductoSchema)
