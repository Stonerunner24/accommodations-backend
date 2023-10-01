module.exports = (sequalize, Sequelize) => {
    const AccomCat = sequalize.define('accomCat', {
        accomCatId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return AccomCat;
}