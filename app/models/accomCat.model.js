module.exports = (sequalize, Sequalize) => {
    const AccomCat = sequalize.define('accomCat', {
        accomCatId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: sequalize.STRING,
            allowNull: false,
        },
    });

    return AccomCat;
}