const UsuarioModel = require('../models/usuario.model');
// Crear un nuevo cliente
exports.create = (req, res) => {

    const client = new UsuarioModel({
        rut_usuario: req.body.rut_usuario,
        nombre_usuario: req.body.nombre_usuario,
        direccion_usuario: req.body.direccion_usuario,
        correo_usuario: req.body.correo_usuario,
        contraseña_usuario: req.body.contraseña_usuario
    })
    client.save()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {
    const nombre_usuario = req.query.nombre_usuario;
    var condition = nombre_usuario ? { nombre_usuario: nombre_usuario } : {};

    UsuarioModel.find(condition)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};







exports.findId = (req, res) => {
    const rut_usuario = req.params.rut_usuario;
    UsuarioModel.findById(rut_usuario)
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró usuario con el rut " + rut_usuario });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar usuario"})
        })
};
// actualizar un cliente por su rut
exports.update = (req, res) => {

    const rut_usuario = req.params.rut_usuario;
    UsuarioModel.findByIdAndUpdate(rut_usuario, req.body,{ useFindAndModify: false })
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró usuario con el rut " + rut_usuario });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar usuario"})
        })
};


exports.delete = (req, res) => {
    const _id = req.params._id;
    ClientModel.findByIdAndRemove(_id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontró usuario con el id " + _id });
            } else {
                res.status(200).send({ message: "usuario eliminado"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar usuario"})
        })
};

exports.deleteAll = (req, res) => {
    ClientModel.deleteMany({})
        .then(data => {
            res.status(200).send({ message: `${data.deletedCount} usuarios eliminados`})
        })
        .catch(err => {
            res.status(500).json({message: "Error"})
        })
};
