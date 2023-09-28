module.exports = (sequelize, Sequelize) => {
    const Request = sequelize.define('request', {
        requestId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studentId:{
            type: Sequelize.INTEGER,
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
        },
    });
    
    return Request;
}