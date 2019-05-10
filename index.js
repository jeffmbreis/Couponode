const conn = require('./core/setupDatabase')

const start = () => {
    const testConnection = conn.authenticate().then((sequelize) => sequelize)
    const testConnection2 = conn.authenticate().then((sequelize) => sequelize)
    console.log('testConnection', testConnection)
    console.log('testConnection2', testConnection2)
}

start()