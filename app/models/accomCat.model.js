module.exports = (sequalize, Sequalize) => {
    const AccomCatId = sequalize.define('accomCatId', {
        accomCatId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: sequalize.STRING,
            allowNull: false,
        },
    })
}