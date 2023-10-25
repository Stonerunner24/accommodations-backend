module.exports = (app) => {
    const students = require ("../controllers/student.controller.js");
    const {authenticate} = require("../authorization/authorization.js");
    var router = require("express").Router();

    //create a new student
    router.post("/", [authenticate], students.create);

    //retrieve all students
    router.get("/", [authenticate], students.findAll);
    
    //Retrieve a single student for a particular id
    router.get("/:id", [authenticate], students.findOne);

    //update a student with id
    router.put("/:id", [authenticate], students.update);

    //delete a student with id
    router.delete("/:id", [authenticate], students.delete);

    //delete all students
    router.delete("/", [authenticate], students.deleteAll);

    app.use("/accommodations-t4/students", router);
};