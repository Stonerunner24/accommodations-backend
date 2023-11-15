/*- Trigger script
    1. Get prof emails
    - Fetch associated student
    - Grab student's faculty by:
    - Student -> StudentSection -> Section -> FacultySection -> Faculty/Staff
    - Get faculty emails
    2. Generate PDF
    - Using JSPDF
    3. Email the profs
    - Save in EmailLog*/

const db = require("../models");
const nodemailer = require("./nodeMailer.helper");

exports.emailFacultyStaff = async (studentId, semesterId) => {
    console.log("Begin emailFacStaff method");
    // Get the student
    let student = await db.student.findByPk(studentId);
    console.log(student);
    // TODO: fetch studentAccoms for given semester and AccomCat 'Academics'
    let studentAccoms = await db.studentAccom.findAll({
        where: {
            studentId: studentId,
            semesterId: semesterId,
        },
        include: {
            model: db.accommodation,
            required: true,
            include: {
                model: db.accomCat,
                where: { name: 'Academics' },
                required: true
            }
        }
    });
    console.log(studentAccoms);

    // Get the student's faculty
    let faculty = await db.facultyStaff.findAll({
        include: {
            model: db.facultySection,
            required: true,
            include: {
                model: db.section,
                where: { semesterId: semesterId },
                required: true,
                include: {
                    model: db.studentSection,
                    required: true,
                    include: {
                        model: db.student,
                        where: { studentId: studentId },
                        required: true
                    }
                }
            }
        }
    });

    // Map the faculty array to eliminate excess data
    faculty = faculty.map(item => {
        let obj = item.dataValues;
        return {
            fName: obj.fName,
            lName: obj.lName,
            email: obj.email
        }
    });
    /*
    // Iterate over all the Faculty/Staff and compose/send email
    for (fac in faculty) {
        let body = fac.fName + ' ' + fac.lName + ', \n\n Be advised that your student, '
        + student.fName + ' ' + student.lName + ' is eligible for academic accommodations this semester.';
    }*/

}

