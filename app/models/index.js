const { request } = require("express");
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.session = require("./session.model.js")(sequelize, Sequelize);
db.accomCat = require("./accomCat.model.js")(sequelize, Sequelize);
db.accommodation = require("./accommodation.model.js")(sequelize, Sequelize);
db.course = require("./course.model.js")(sequelize, Sequelize);
db.emailLog = require("./emailLog.model.js")(sequelize, Sequelize);
db.facultySection = require("./facultySection.model.js")(sequelize, Sequelize);
db.facultyStaff = require("./facultyStaff.model.js")(sequelize, Sequelize);
db.request = require("./request.model.js")(sequelize, Sequelize);
db.section = require("./section.model.js")(sequelize, Sequelize);
db.semester = require("./semester.model.js")(sequelize, Sequelize);
db.student = require("./student.model.js")(sequelize, Sequelize);
db.studentAccom = require("./studentAccom.model.js")(sequelize, Sequelize);
db.studentSection = require("./studentSection.model.js")(sequelize, Sequelize);

// foreign key for student section
db.studentSection.belongsTo(db.student, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});
db.studentSection.belongsTo(db.section, {
  foreignKey: "sectionId",
  onDelete: "CASCADE"
});

// foreign key for student accommodation
db.studentAccom.belongsTo(db.semester, {
  foreignKey: "semesterId",
  onDelete: "CASCADE"
});
db.studentAccom.belongsTo(db.accommodation, {
  foreignKey: "accomId",
  onDelete: "CASCADE"
});
db.studentAccom.belongsTo(db.student, {
  foreignKey: "studentId",
  onDelete: "CASCADE"
});

// foreign key for request
db.request.belongsTo(db.student, {
  foreignKey: "studentId",
  onDelete: "CASCADE"
});

// foreign key for section
db.section.belongsTo(db.course, {
  foreignKey: "courseNumber",
  onDelete: "CASCADE"
});
db.section.belongsTo(db.facultyStaff, {
  foreignKey: "facultyId",
  onDelete: "CASCADE"
});

// foreign key for faculty section
db.facultySection.belongsTo(db.section, {
  foreignKey: "sectionId",
  onDelete: "CASCADE"
});
db.facultySection.belongsTo(db.facultyStaff, {
  foreignKey: "facultyId",
  onDelete: "CASCADE"
});

// foreign key for user
db.user.belongsTo(db.student, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
  allowNull: true,
});

db.session.belongsTo(db.user, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

// foreign key for email log
db.emailLog.belongsTo(db.studentAccom, {
  foreignKey: "studAccId",
  onDelete: "CASCADE"
});

module.exports = db;