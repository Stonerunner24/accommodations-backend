module.exports = (sequalize, Sequalize) => {
    const Request = sequalize.define('request', {
        requestId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studentId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        dateMade:{
            type: sequalize.DATE,
            allowNull: false,
        },
        approvedBy:{
            type: sequalize.STRING,
            allowNull: false,
        },
        status:{
            type: sequalize.STRING,
            allowNull: false,
        },
        semester:{
            type:INTEGER,
            allowNull:false,
            autoIncrement: true,
        },
    })
}