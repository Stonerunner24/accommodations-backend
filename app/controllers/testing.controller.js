const email = require("../utils/email.script.js");

exports.sendEmails = (req, res) =>{
  email.emailFacultyStaff(1000001, 5);
}
