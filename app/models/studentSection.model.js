module.exports = (sequelize, Sequelize) => {
  const StudentSection = sequelize.define("studentSection", {}, {
    timestamps: false
  });

  return StudentSection;
};
