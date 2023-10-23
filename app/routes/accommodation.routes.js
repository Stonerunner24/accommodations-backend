const { accommodation } = require("../models/index.js");

module.exports = (app) => {
    const requests = require ("../controllers/request.controller.js");
    const {authenticate} = require("../authorization/authorization.js");
    var router = require("express").Router();

    //create a new request
    router.post("/", [authenticate], accommodation.create);

    //retrieve all requests
    router.get("/", [authenticate], accommodation.findAll);
    
    //Retrieve all requests for student
    router.get("/studentReq/:studentId", [authenticate], accommodation.findAllForAccommCategory);

    //update a request with id
    router.put("/:id", [authenticate], accommodation.update);

    //delete a request with id
    router.delete("/:id", [authenticate], accommodation.delete);

    //delete all requests
    router.delete("/", [authenticate], accommodation.deleteAll);

    app.use("/accommodations-t4/accommodation", router);
};