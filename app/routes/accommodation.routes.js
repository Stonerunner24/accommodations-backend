module.exports = (app) => {
    const accommodation = require ("../controllers/accommodation.controller.js");
    const {authenticate} = require("../authorization/authorization.js");
    var router = require("express").Router();

    //create a new request
    router.post("/", [authenticate], accommodation.create);

    //retrieve all requests
    router.get("/", [authenticate], accommodation.findAll);
    
<<<<<<< HEAD
    //Retrieve all requests for accommodation categories
    router.get("/studentReq/:studentId", [authenticate], accommodation.findAllForAccommCategory);
=======
    //Retrieve all requests for accomcat
    router.get("/category/:accomCatId", [authenticate], accommodation.findAllForAccommCategory);

    //retrive all accommodations for an id
    router.get("/:accomId", [authenticate], accommodation.findOne);
>>>>>>> d0482b163786298b616aa96578c8c11f003b75be

    //update a request with id
    router.put("/:id", [authenticate], accommodation.update);

    //delete a request with id
    router.delete("/:id", [authenticate], accommodation.delete);

    //delete all requests
    router.delete("/", [authenticate], accommodation.deleteAll);

    app.use("/accommodations-t4/accommodation", router);
};