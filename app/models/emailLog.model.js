module.exports = (sequalize, Sequalize) => {
    const EmailLog = sequalize.define('emailLog', {
        emailLogId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studAccId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        date:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        receipt:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return EmailLog;
}