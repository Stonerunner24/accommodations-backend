const email = require("../utils/email.helper.js");

exports.sendEmails = (req, res) =>{
  email.emailFacultyStaff(1559225, 5);
}
