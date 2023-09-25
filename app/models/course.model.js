module.exports = (sequalize, Sequalize) => {
    const Course = sequalize.define('course', {
        courseNumber:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:{
            type: sequalize.STRING(1080),
            allowNull: false,
        },
    })
}