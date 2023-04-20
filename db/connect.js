const mongoose = require('mongoose')

const connectDB = (url, user, pass, dbName) => {
  return mongoose.connect(url, {
    user,
    pass,
    dbName,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
