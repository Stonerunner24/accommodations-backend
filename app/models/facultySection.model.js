module.exports = (sequalize, Sequalize) => {
    const FacultySection = sequalize.define('facultySection', {
        facultySectionId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        facultyId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        sectionId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
    });

    return FacultySection;
}