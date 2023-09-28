module.exports = (sequelize, Sequelize) => {
    const FacultyStaff = sequelize.define('facultyStaff', {
        facultyStaffId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fName:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        lName:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        accomCatId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
    });

    return FacultyStaff;
}