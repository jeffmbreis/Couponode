module.exports = (sequelize, DataTypes) => {
    class Record extends sequelize.Model { }
    Record.init({
        title: DataTypes.STRING,
        url: DataTypes.TEXT,
    }, { sequelize })
    return Record
}