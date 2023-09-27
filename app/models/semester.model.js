module.exports = (sequalize, Sequalize) => {
    const Semester = sequalize.define('semester', {
        semesterId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        season:{
            type: sequalize.STRING,
            allowNull: false,
        },
        year:{
            type: sequalize.STRING,
            allowNull: false,
        },
    });
    
    return Semester;
}