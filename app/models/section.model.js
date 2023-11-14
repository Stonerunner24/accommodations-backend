module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define('section', {
        sectionId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        courseNumber: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false
    });

    return Section; s
}