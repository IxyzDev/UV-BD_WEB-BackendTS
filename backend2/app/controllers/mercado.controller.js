// Importar dependencias
const MercadoModel = require('../models/mercado.model');
// Crear un nuevo mercadoe
exports.create = (req, res) => {

    const mercado = new MercadoModel({
        nombre_mercado: req.body.nombre_mercado,
        direccion_mercado: req.body.direccion_mercado
    })
    mercado.save()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};
// Retornar todos los mercadoes de la base de datos.
exports.findAll = (req, res) => {
    const nombre_mercado = req.query.nombre_mercado;
    var condition = nombre_mercado ? { nombre_mercado: nombre_mercado } : {};

    MercadoModel.find(condition)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};



// Buscar un mercadoe por su id
exports.findId = (req, res) => {
    const _id = req.params._id;
    MercadoModel.findById(_id)
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró mercadoe con el id " + _id });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar mercado"})
        })
};
// actualizar un mercadoe por su id
exports.update = (req, res) => {

    const _id = req.params._id;
    MercadoModel.findByIdAndUpdate(_id, req.body,{ useFindAndModify: false })
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró mercado con el id " + _id });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar mercado"})
        })
};


// eliminar un mercadoe
exports.delete = (req, res) => {
    const _id = req.params._id;
    MercadoModel.findByIdAndRemove(_id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontró mercado con el id " + _id });
            } else {
                res.status(200).send({ message: "mercado eliminado"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar mercado"})
        })
};
// eliminar a todos los mercadoes
exports.deleteAll = (req, res) => {
    MercadoModel.deleteMany({})
        .then(data => {
            res.status(200).send({ message: `${data.deletedCount} mercados eliminados`})
        })
        .catch(err => {
            res.status(500).json({message: "Error"})
        })
};