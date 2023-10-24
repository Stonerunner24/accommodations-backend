module.exports = (app) => {
    const accomodation = require("../controllers/accommodation.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    //create a new accommodation
    router.post("/", [authenticate], accomodation.create);

    //retrive all accommodations
    router.get("/", [authenticate], accomodation.findAll);

    //retrive an accommodation by accomId
    router.get("/:accomId", [authenticate], accomodation.findOne);
    
    //update an accommodation by accomId
    router.put("/:accomId", [authenticate], accomodation.update);

    //delete an accommodation by accomId
    router.delete("/:accomId", [authenticate], accomodation.delete);

    //delete all accommodations 
    router.delete("/" [authenticate], accomodation.deleteAll);

    app.use("/accommodation/accommodation", router);
};