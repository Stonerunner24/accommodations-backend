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

// foreign key for session
db.user.hasMany(
  db.session,
  { as: "session" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.session.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);

// foreign key for Student Accommodation
db.studentAccom.hasOne(
  db.student,
  { as: "student"},
  { foreignKey: { allowNull: false}, onDelete: "CASCADE"}
)
db.student.belongsTo(
  db.studentAccom,
  { as: "studentAccom"},
  { foreignKey: { allowNull: false}, onDelete: "CASCADE"}
)

db.studentAccom.hasOne(
  db.semester,
  { as: "semester"},
  { foreignKey: {allowNull: false}, onDelete: "CASCADE"}
)
db.semester.belongsTo(
  db.studentAccom,
  { as: "studentAccom"},
  { foreignKey: {allowNull: false}, onDelete: "CASCADE"}
)

db.studentAccom.hasOne(
  db.accommodation,
  { as: "accommodation"},
  { foreignKey: {allowNull: false}, onDelete: "CASCADE"}
)
db.accommodation.belongsTo(
  db.studentAccom,
  { as: "studentAccom"},
  { foreignKey: {allowNull: false}, onDelete: "CASCADE"}
)

// connect accommodation and student accommodation
db.accommodation.hasMany(
  db.studentAccom,
  { as:"studentAccom"},
  { foreignKey: {allowNull: false}, onDelete: "CASCADE"}
)
db.studentAccom.belongsTo(
  db.accommodation,
  { as: "accommodation"},
  { foreignKey: {allowNull: false}, onDelete:"CASCADE"}
)

db.student.hasMany(
  db.studentAccom,
  { as:"studentAccom"},
  { foreignKey: {allowNull: false}, onDelete: "CASCADE"}
)
db.studentAccom.belongsTo(
  db.student,
  { as: "student"},
  { foreignKey: {allowNull: false}, onDelete:"CASCADE"}
)

module.exports = db;
