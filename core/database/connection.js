const Sequelize = require('sequelize')

//Models
const Record = require('../models/record')

const host = process.env[`DATABASE_HOST_${env.toUpperCase()}`]
const database = process.env[`DATABASE_NAME_${env.toUpperCase()}`]
const username = process.env[`DATABASE_USERNAME_${env.toUpperCase()}`]
const password = process.env[`DATABASE_PASSWORD_${env.toUpperCase()}`]

const connection = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql',
});

connection.import('Record', Record(connection, Sequelize.DataTypes)

module.exports = connection