const ProductoModel = require('../models/producto.model');

exports.create = (req, res) => {

    const producto = new ProductoModel({
        nombre_producto: req.body.nombre_producto,
        marca_producto: req.body.marca_producto,
        tipo_producto: req.body.tipo_producto,
    })
    client.save()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};

exports.findAll = (req, res) => {
    const nombre_producto = req.query.nombre_producto;
    var condition = nombre_producto ? { nombre_producto: nombre_producto } : {};

    ProductoModel.find(condition)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};



exports.findId = (req, res) => {
    const marca_producto = req.params.marca_producto;
    ProductoModel.findById(marca_producto)
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró producto con esta marca " + marca_producto });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar producto"})
        })
};


exports.delete = (req, res) => {
    const nombre_producto = req.params.nombre_producto;
    ProductoModel.findByIdAndRemove(nombre_producto)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontró producto con este nombre" + nombre_producto});
            } else {o
                res.status(200).send({ message: "producto eliminado"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar cliente"})
        })
};

exports.deleteAll = (req, res) => {
    ProductoModel.deleteMany({})
        .then(data => {
            res.status(200).send({ message: `${data.deletedCount} productos eliminados`})
        })
        .catch(err => {
            res.status(500).json({message: "Error"})
        })
};


