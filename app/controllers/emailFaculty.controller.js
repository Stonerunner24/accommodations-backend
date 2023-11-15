const email = require("../utils/email.helper.js");

exports.sendEmails = (req, res) => {
  email.emailFacultyStaff(req.body.studentId, req.body.semesterId);
}
