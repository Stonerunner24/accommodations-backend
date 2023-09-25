module.exports = (sequalize, Sequalize) => {
    const Accommodation = sequalize.define('accommodation', {
        accomId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoryName:{
            type: sequalize.String,
            allowNull: false,
        },
        title:{
            type: sequalize.STRING,
            allowNull: false,
        },
        description:{
            type: sequalize.STRING(1080),
            allowNull: false,
        },
        explanationFile:{
            type: sequalize.STRING,
            allowNull: false,
        },  
    })
}