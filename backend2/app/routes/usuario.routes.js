module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");
    var router = require("express").Router();

    router.post("/", usuarios.create);
    router.get("/", usuarios.findAll);
    router.get("/:_id", usuarios.findId);
    router.put("/:_id", usuarios.update);
    router.delete("/:_id", usuarios.delete);
    router.delete("/", usuarios.deleteAll);
    app.use('/api/usuarios', router);
  };
