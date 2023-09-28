module.exports = (sequalize, Sequalize) => {
    const StudentAccom = sequalize.define('studentAccom', {
        studentAccomId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studentId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        semesterId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        accomId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        data:{
            type: Sequelize.STRING,
            allowNull: true,
        },
    });

    return StudentAccom;
}