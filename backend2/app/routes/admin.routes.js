module.exports = app => {
    const admins = require("../controllers/admin.controller.js");
    var router = require("express").Router();

    router.post("/", admins.create);
    router.get("/", admins.findAll);
    router.get("/:_id", admins.findId);
    router.put("/:_id", admins.update);
    router.delete("/:_id", admins.delete);
    router.delete("/", admins.deleteAll);
    app.use('/api/admins', router);
  };
