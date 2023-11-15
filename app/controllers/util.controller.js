const emailHelper = require("../utils/email.helper.js");

exports.sendEmails = (req, res) => {
  emailHelper.emailFacultyStaff(req.body.studentId, req.body.semesterId);
}
