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

    //create a new request

    const request = {
        requestId: req.body.requestId,
        dateMade: Date.now(),
        approvedBy: null,
        status: null,
        semester: req.body.semester,
        createdAt: Date.now(),
        updatedAt: null,
        studentId: req.body.studentId,
    };

    //save request into the database

    Request.create(request)
        .then((data)=>{
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "some error occurred while creating the Request",
            });
        });
};


//retrieve all requests from the database.

exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? {id: { [Op.like]: `%${id}%` } } : null;

    Request.findAll({ where: condition})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving requests",
            });
        });
};

// find a single request with an Id

exports.findOne = (req, res) => {
    const id = req.params.requestId;

    Request.findByPk(id)
        .then((data) => {
            if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: `cannot find request with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error retrieving request with id=${id}`,
            });
        });
};

//delete all requests from database
exports.deleteAll = (req, res) => {
    Request.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} requests were deleted successfully `});
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while removing all requests from the database"

            });
        });
};