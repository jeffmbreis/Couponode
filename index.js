const connectToDatabase = require('./core/connectToDatabase')

const start = async () => {
    await connectToDatabase()
    console.log('continua')
}

start().then(result => console.log(result))