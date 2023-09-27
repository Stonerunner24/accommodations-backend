module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      studentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      lName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      permission: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      dateSined: {
        type: Sequalize.DATE,
        allowNull: false,
      },
      version: {
        type: Sequelize.STRING(255),
        allowNull: false,
      }
    });
  
    return Student;
  };
  