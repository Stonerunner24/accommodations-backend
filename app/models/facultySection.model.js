module.exports = (sequalize, Sequalize) => {
    const FacultySection = sequalize.define('facultySection', {
        facultySectionId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        facultyId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        sectionId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
    });

    return FacultySection;
}