module.exports = (sequelize, Sequelize) => {
    const Accommodation = sequelize.define('accommodation', {
        accomId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoryName:{
            type: Sequelize.String,
            allowNull: false,
        },
        title:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.STRING(1080),
            allowNull: false,
        },
        explanationFile:{
            type: Sequelize.STRING,
            allowNull: false,
        },  
    });

    return Accommodation;
}