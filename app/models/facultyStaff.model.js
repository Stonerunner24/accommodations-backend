module.exports = (sequalize, Sequalize) => {
    const FacultyStaff = sequalize.define('facultyStaff', {
        facultyStaffId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fName:{
            type: sequalize.STRING,
            allowNull: false,
        },
        lName:{
            type: sequalize.STRING,
            allowNull: false,
        },
        email:{
            type: sequalize.STRING,
            allowNull: false,
        },
        accomCatId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
    })
}