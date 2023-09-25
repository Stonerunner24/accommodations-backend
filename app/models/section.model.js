module.exports = (sequalize, Sequalize) => {
    const Section = sequalize.define('section', {
        sectionId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        semester:{
            type: sequalize.STRING,
            allowNull: false,
        },
        courseNumber:{
            type: sequalize.INTEGER,
            allowNull: false,
        },
        facultyId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
    })
}