module.exports = app => {
    const mercados = require("../controllers/mercado.controller.js");
    var router = require("express").Router();

    router.post("/", mercados.create);
    router.get("/", mercados.findAll);
    router.get("/:_id", mercados.findId);
    router.put("/:_id", mercados.update);
    router.delete("/:_id", mercados.delete);
    router.delete("/", mercados.deleteAll);
    app.use('/api/mercados', router);
  };
