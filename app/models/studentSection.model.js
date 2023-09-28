module.exports = (sequelize, Sequelize) => {
    const StudentSection = sequelize.define("studentSection", {
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  
    return StudentSection;
  };
  