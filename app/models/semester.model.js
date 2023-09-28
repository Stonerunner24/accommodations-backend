module.exports = (sequalize, Sequalize) => {
    const Semester = sequalize.define('semester', {
        semesterId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        season:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        year:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    
    return Semester;
}