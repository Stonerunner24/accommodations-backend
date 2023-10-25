module.exports = (app) => {
    const accommodation = require("../controllers/accommodation.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    //create a new accommodation
    router.post("/", [authenticate], accommodation.create);

    //retrive all accommodations
    router.get("/", [authenticate], accommodation.findAll);

    //retrive an accommodation by accomId
    router.get("/:accomId", [authenticate], accommodation.findOne);
    
    //update an accommodation by accomId
    router.put("/:accomId", [authenticate], accommodation.update);

    //delete an accommodation by accomId
    router.delete("/:accomId", [authenticate], accommodation.delete);

    //delete all accommodations 
    router.delete("/" [authenticate], accommodation.deleteAll);

    app.use("/accommodations-t4/accommodation", router);
};