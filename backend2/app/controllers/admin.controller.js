const AdminModel = require('../models/admin.model');

// Retornar todos los admins de la base de datos.
exports.findAll = (req, res) => {
    const nombre_admin = req.query.nombre_admin;
    var condition = nombre_admin ? { nombre_admin: nombre_admin } : {};

    AdminModel.find(condition)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};






// Buscar un admin por su _id
exports.findId = (req, res) => {
    const _id = req.params._id;
    AdminModel.findById(_id)
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró admin con el id " + _id });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar admin"})
        })
};



// eliminar un admin
exports.delete = (req, res) => {
    const _id = req.params._id;
    AdminModel.findByIdAndRemove(_id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontró admin con el _id " + _id });
            } else {
                res.status(200).send({ message: "admin eliminado"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar admin"})
        })
};

