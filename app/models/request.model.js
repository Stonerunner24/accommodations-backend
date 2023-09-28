module.exports = (sequalize, Sequalize) => {
    const Request = sequalize.define('request', {
        requestId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studentId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        dateMade:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        approvedBy:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        status:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        semester:{
            type:INTEGER,
            allowNull:false,
            autoIncrement: true,
        },
    });
    
    return Request;
}