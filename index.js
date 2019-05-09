const connectToDatabase = require('./core/connectToDatabase')

const start = async () => {
    const connectionData = {}

    await connectToDatabase(connectionData)
    console.log('continua')
}

start().then(result => console.log(result))