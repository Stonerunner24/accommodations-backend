module.exports = (sequalize, Sequalize) => {
    const EmailLog = sequalize.define('emailLog', {
        emailLogId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        studAccId:{
            type: sequalize.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        date:{
            type: sequalize.DATE,
            allowNull: false,
        },
        receipt:{
            type: sequalize.STRING,
            allowNull: false,
        },
    });

    return EmailLog;
}