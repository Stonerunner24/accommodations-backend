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

exports.emailFacultyStaff = (studentId, semesterId) => {
    console.log("Inside email facStaff");
    db.facultyStaff.findAll({
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
    })
    .then(facultys => {
        // Process faculty, access emails and send
        facultys = facultys.map(faculty => {
            let obj = faculty.dataValues;
            return {
                fName: obj.fName,
                lName: obj.lName,
                email: obj.email
            }
        })
        console.log(facultys);
    })
    .catch(err => {
        console.log(err);
    })

    // get all studentSections for student
    // Get associated sections WHERE semeseterId matches the one for the given semeseter
    // Get associated facultySections
    // Get associated Faculty/Staff

    // Iterate over all the Faculty/Staff we collected and get their emails
    // Send the emails

}

