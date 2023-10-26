const { student } = require("../models");

module.exports = (app) => {
    const studentSection = require ("../controllers/studentSection.controller.js");
    const {authenticate} = require("../authorization/authorization.js");
    var router = require("express").Router();

    router.post("/", [authenticate], studentSection.create);

    router.get("/", [authenticate], studentSection.findAll);

    router.get("/:id", [authenticate], studentSection.findOne);

    router.put(":/id", [authenticate], studentSection.update);

    router.delete("/:id", [authenticate], studentSection.delete);

    router.delete("/", [authenticate], studentSection.deleteAll);

    app.use("/accommodations-t4/studentSection", router);
};