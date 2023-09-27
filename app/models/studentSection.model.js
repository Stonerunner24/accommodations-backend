module.exports = (sequelize, Sequelize) => {
    const StudentSection = sequelize.define("studentSection", {
      studentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      sectionId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
    });
  
    return StudentSection;
  };
  