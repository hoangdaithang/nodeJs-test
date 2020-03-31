module.exports = () => {
  const mongoose = require('mongoose')
  mongoose.Promise = global.Promise

  const connectUrl = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`
  return mongoose.connect(connectUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}
