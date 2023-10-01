module.exports = (sequelize, Sequelize) => {
    const Request = sequelize.define('request', {
        requestId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
            type: Sequelize.INTEGER,
            allowNull:false,
        },
    });
    
    return Request;
}