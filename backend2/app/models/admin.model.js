const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
      contraseña_admin: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Admins', AdminSchema)
