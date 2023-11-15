module.exports = (app) => {
    const testing = require("../controllers/testing.controller.js");
    var router = require("express").Router();

    router.get("/emailDaProfs", testing.sendEmails)

    app.use("/accommodations-t4/testing", router);
}