module.exports = (sequalize, Sequalize) => {
    const StudentAccom = sequalize.define('studentAccom', {
        studentAccomId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studentId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        semesterId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        accomId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        data:{
            type: sequalize.STRING,
            allowNull: true,
        },
    });

    return StudentAccom;
}