const asyncWrap = require('./async-wrap')
const _error = require('../../Responses/error')
const jwtService = require('../../Services/JwtService')
const Users = require('../../Models/Users')
const { errorsIndex } = require('../../Utils/errorsFunc')
module.exports = {
  checkAuth: asyncWrap(async (req, res, next) => {
    const authorization = req.headers.authorization || null
    let token = null
    if (!authorization || authorization === 'null' || authorization === 'undefined') return _error(res, { message: errorsIndex(req, 'tokenNotFormat') }, {}, 401)
    if (authorization && authorization.indexOf('Bearer ') > -1) {
      token = authorization.replace('Bearer ', '')
    }
    if (!token) return _error(res, { message: errorsIndex(req, 'tokenNotFormat') }, {}, 401)

    const decode = await jwtService.verifyToken(token)
    if (!decode._id) return _error(res, { message: errorsIndex(req, 'tokenFalse') }, {}, 401)
    const userId = decode && decode._id

    req.user = await Users.findOne({ _id: userId })

    if (!req.user) {
      return _error(res, { message: errorsIndex(req, 'tokenDoesNotGetProfile') }, {}, 401)
    }
    return next()
  })
}
