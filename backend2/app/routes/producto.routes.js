module.exports = app => {
    const productos = require("../controllers/producto.controller.js");
    var router = require("express").Router();

    router.post("/", productos.create);
    router.get("/", productos.findAll);
    router.get("/:_id", productos.findId);
    router.put("/:_id", productos.update);
    router.delete("/:_id", productos.delete);
    router.delete("/", productos.deleteAll);
    app.use('/api/productos', router);
  };
