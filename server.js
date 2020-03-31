require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const http = require('http')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const routes = require('./routes/api')
const app = express()
const server = http.Server(app)
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'localhost'
const bodyParser = require('body-parser')
const limiter = require('././config/limitRequest')
const cors = require('cors')
const helmet = require('helmet')
const initialMongoDB = require('./database/mongodb')
server.listen(port, () => {
  console.info(
    `
  =====================================================
  -> Server 🏃 (running) on Port:${port} (${env}) 😘
  =====================================================
  `
  )
})
initialMongoDB()
app.enable('trust proxy') // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
app.use(limiter) //  apply to all requests
app.use(helmet()) // set header

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors('*')) // enable CORS - Cross Origin Resource Sharing
app.use('/api/v1', routes)
app.use(routes)
require('./routes/web')(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
