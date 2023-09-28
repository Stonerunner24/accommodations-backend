module.exports = (sequelize, Sequelize) => {
    const StudentAccom = sequelize.define('studentAccom', {
        studentAccomId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studentId:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        semesterId:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        accomId:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        data:{
            type: Sequelize.STRING,
            allowNull: true,
        },
    });

    return StudentAccom;
}