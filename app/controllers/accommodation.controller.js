const db = require("../models");
const Accommodation = db.accommodation;
const Op = db.Sequelize.Op;

//create and save a new accomodation

exports.create = (req, res) => {
    //validate request
    if(!req.body.accomId){
        res.status(400).send({
            message: "content cannot be empty",
        });
        return;
    }

    //create the accommodation
    const accommodation = {
        accomId: req.body.accomId,
        categoryName: req.body.categoryName,
        title: req.body.title,
        description: req.body.description,
        explanationFile: req.body.explanationFile,
    };

    //save accommodation in database
    Accommodation.create(accommodation)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while creating an accommodation"
            });
        });
};




// Retrieve all People from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    User.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving accomodations.",
        });
      });
  };

//find a single accommodation with an accomId
exports.findOne = (req, res) =>{
    const id = req.params.accomId;

    User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};

//update an accommodation by the id in the request
exports.update = (req, res) => {
    const accomId = req.params.accomId;

    Accommodation.update(req.body, {
        where: {accomId: accomId},
    })
        .then((num) => {
            if(num == 1) {
                res.send({
                    message: "accomodation was updated successfully"
                });
            }else{
                res.send({
                    message: `Cannot update User with id=${accomId}. Maybe accommodation was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating accommodation with id " + accomId,
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.accomid;

    Accommodation.destroy({
        where: {accomId: id},
    })
        .then((num) => {
            if(num == 1){
                res.send({
                    message: "accommodation was deleted successfully",
                });
            } else {
                res.send({
                    message: `Cannot delete accommodation with accommodation id = ${accomId}`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:"could not delete accommodation with id = " + accomId,
            });
        });
};

//delete all of the accommodations
exports.deleteAll = (req, res) => {
    User.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} accommodations were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all accommodations.",
        });
      });
  };