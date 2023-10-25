const db = require("../models");
const Request = db.request;
const Op = db.Sequelize.Op

//create and save a new Request
exports.create = (req, res) => {
    //validate the request for a request
    if(!req.body.requestId){
        res.status(400).send({
            message: "Content cannot be empty!",
        });
        return;
    }

    const request = {
        requestId: req.body.requestId,
        dateMade: new Date(),
        approvedBy: null,
        status: 'Open',
        semester: req.body.semester,
        studendId: req.body.studentId

    };
    
    //import nodemailer
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail', auth: {
      user: 'teamfoursoftware@gmail.com',
      pass: 'arqn rgcs ckbn bmsg'
      }
      });

    Request.create(request)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred whilst creating the request"
            });
        });

        const mailOptions = {
            from: transporter.user,
            to: 'd.billingsley@eagles.oc.edu',
            subject: 'Test', text:
            'Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.'
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log('Error: ' + error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
};

//retrieve all requests from the database
exports.findAll = (req, res) => {
    const requestId = req.query.requestId;
    var condition = requestId ? {requestId: {[Op.like]: `%${requestId}%`}} : null;
    Request.findAll({ where: condition})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occurred whilst retrieving requests"

            });
        });
};

//find all requests for status of either 'Open' or 'Closed'
exports.findAllForStatus = (req, res) => {
    const status = req.params.status
    Request.findAll({where: {status: status}})
        .then((data) => {
            if(data){
                res.send(data);
            }
            else{
                res.status(404).send({
                    message: `Cannot find ${status} requests.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                'Error retrieving ' + status + ' requests.',
            });
        });
};

exports.findAllForStudent = (req, res) => {
    const student = req.params.studentId
    Request.findAll({where: {student: student}})
        .then((data) => {
            if(data){
                res.send(data);
            }
            else{
                res.status(404).send({
                    message: `Cannot find ${student}'s requests.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Error retrieving " + student + "'s requests.",
            });
        });
};

//find a single request with an id
exports.findOne = (req, res) => {
    const id = req.params.requestId;
    Request.findByPk(requestId)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Request with id=${requestId}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error retrieving Request with id=" + requestId,
        });
      });
 };

 //update a request by the id in the request
exports.update = (req, res) => {
    const id = req.params.requestId;
    Request.update(req.body, {
      where: { id: requestId },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "request was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update request with id=${id}. Maybe request was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating request with id=" + id,
        });
      });
};

// Delete a request with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.requestId;
    Request.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "request was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete request with id=${id}. Maybe request was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete request with id=" + id,
        });
      });
};

// Delete all requests from the database.
exports.deleteAll = (req, res) => {
    Request.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Requests were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all requests.",
        });
      });
  };
