const db = require("../models");
const StudentAccom = db.studentAccom;
const Accom = db.accommodation;
const Semester = db.semester;
const Student = db.student;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {

    try {
        const accom = await Accom.findOne({
            where: {
                accomId: req.body.accomId,
            },
        })

        const semester = await Semester.findOne({
            where: {
                semesterId: req.body.semesterId,
            },
        });

        const student = await Student.findOne({
            where: {
                studentId: req.body.studentId,
            },
        });

        if (!semester || !student || !accom){
            res.status(404).send({
                message: 'semester or student or accommodation not found',
            });
            return;
        }

        const studentAccom = {
                accomId: accom.accomId,
                data: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                semesterId: semester.semesterId,
                studentId: student.studentId,
            };
          
        const createdRequest = await StudentAccom.create(studentAccom);

        res.send(createdRequest);
    }catch(err){
        res.status(500).send({
            message:err.message || 'some error occurred whilst creating the student accommodation',
        });
    }
};

//retrieve all studentAccoms from the database
exports.findAll = (req, res) => {
    const studentAccomId = req.query.studentAccomId;
    var condition = studentAccomId ? {studentAccomId: {[Op.like]: `%${studentAccomId}%`}} : null;
    StudentAccom.findAll({ 
        include: {all: true},
        where: condition
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occurred whilst retrieving student accoms"

            });
        });
};

//find a single request with an id
exports.findOne = (req, res) => {
    const id = req.params.studentAccomId;
    StudentAccom.findByPk(studentAccomId)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find student accom with id=${studentAccomId}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error retrieving student accom with id=" + studentAccomId,
        });
      });
 };
 exports.findAllForStudent = (req, res) => {
  const studentId = req.params.studentId;
  StudentAccom.findAll({where: {studentId: studentId}})
    .then((data) => {
      if(data){
        res.send(data);
      }
      else{
        res.status(404).send({
          message: `Cannot find accommodations for student ${studentId}`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 
          err.message || 
          "error retrieving accommodations for student " + studentId
      });
    });
 } ;

  //update a student accom by the id in the request
exports.update = (req, res) => {
    const id = req.params.studentAccomId;
    StudentAccom.update(req.body, {
      where: { id: studentAccomId },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "student accom was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update student accom with id=${id}. Maybe student accom was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating student accom with id=" + id,
        });
      });
};

// Delete a request with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.studentAccomId;
    StudentAccom.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "studentAccom was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete studentAccom with id=${id}. Maybe studentAccom was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete studentAccom with id=" + id,
        });
      });
};

// Delete all studentAccoms from the database.
exports.deleteAll = (req, res) => {
    StudentAccom.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} studentAccoms were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all studentAccoms.",
        });
      });
  };