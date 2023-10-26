const { student } = require("../models");

module.exports = (app) => {
    const studentAccom = require ("../controllers/studentAccom.controller.js");
    const {authenticate} = require("../authorization/authorization.js");
    var router = require("express").Router();

    router.post("/", [authenticate], studentAccom.create);

    router.get("/", [authenticate], studentAccom.findAll);

    router.get("/:id", [authenticate], studentAccom.findOne);

    router.put(":/id", [authenticate], studentAccom.update);

    router.delete("/:id", [authenticate], studentAccom.delete);

    router.delete("/", [authenticate], studentAccom.deleteAll);

    app.use("/accommodations-t4/studentAccom", router);
};