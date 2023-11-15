module.exports = (app) => {
    const emailFaculty = require("../controllers/emailFaculty.controller.js");
    var router = require("express").Router();

    router.get("/", emailFaculty.sendEmails)

    app.use("/accommodations-t4/emailFaculty", router);
}