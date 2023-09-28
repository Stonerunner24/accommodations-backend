module.exports = (sequalize, Sequalize) => {
    const Course = sequalize.define('course', {
        courseNumber:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:{
            type: Sequelize.STRING(1080),
            allowNull: false,
        },
    });

    return Course;
}