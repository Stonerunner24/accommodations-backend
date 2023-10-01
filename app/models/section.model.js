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
    });

    return Section;s
}