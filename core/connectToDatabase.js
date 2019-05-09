require('dotenv').config()
const Sequelize = require('sequelize')

async function connectToDatabase() {
    const connectionData = {}

    getEnvironmentDatabaseConnectionData(connectionData)
    await connectToDatabase(connectionData)

    async function getEnvironmentDatabaseConnectionData(connectionData) {
        const env = await process.env.NODE_ENV || 'development'

        connectionData.host = process.env[`DATABASE_HOST_${env.toUpperCase()}`]
        connectionData.name = process.env[`DATABASE_NAME_${env.toUpperCase()}`]
        connectionData.username = process.env[`DATABASE_USERNAME_${env.toUpperCase()}`]
        connectionData.password = process.env[`DATABASE_PASSWORD_${env.toUpperCase()}`]
    }

    function connectToDatabase(connectionData) {
        const sequelize = new Sequelize(connectionData.name, connectionData.username, connectionData.password, {
            host: connectionData.host,
            dialect: 'mysql',
        })

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

}

module.exports = connectToDatabase
