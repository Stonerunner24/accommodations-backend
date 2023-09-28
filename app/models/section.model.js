module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define('section', {
        sectionId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        semester:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        courseNumber:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        facultyId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
    });

    return Section;s
}