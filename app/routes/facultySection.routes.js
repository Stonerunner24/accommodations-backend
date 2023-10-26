module.exports = (app) => {
    const facultySection = require ("../controllers/facultySection.controller.js");
    const {authenticate} = require("../authorization/authorization.js");
    var router = require("express").Router();

    //create a new faculty section
    router.post("/", [authenticate], facultySection.create);

    //retrieve all faculty sections
    router.get("/", [authenticate], facultySection.findAll);

    //update a faculty section with id
    router.put("/:id", [authenticate], facultySection.update);

    //delete a faculty section with id
    router.delete("/:id", [authenticate], facultySection.delete);

    //delete all faculty sections
    router.delete("/", [authenticate], facultySection.deleteAll);

    app.use("/accommodations-t4/facultySection", router);
};