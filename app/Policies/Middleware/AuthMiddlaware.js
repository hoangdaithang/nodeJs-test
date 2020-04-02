const _error = require('../../Responses/error')
const { errorsIndex } = require('../../Utils/errorsFunc')
const Users = require('../../Models/Users')
const WordPressService = require('../../Services/WordPressService')

module.exports = {
  register: async (req, res, next) => {
    const { confirmPass, password, name } = req.body

    // Check already exists or not
    const recordUser = await Users.findOne({ name })
    if (!recordUser) {
      if (password === confirmPass) {
        return next()
      }
      return _error(res, { message: errorsIndex(req, 'confirmPassFalse') })
    }
    return _error(res, { message: errorsIndex(req, 'nameExits') })
  },
  login: async (req, res, next) => {
    const { name, password } = req.body
    req.user = await Users.findOne({ name })
    if (!req.user) return _error(res, { message: errorsIndex(req, 'nameDoesNotExits') }, {}, 401)
    const isPasswordCorrect = await WordPressService.checkPassword(
      password,
      req.user.password
    )
    if (!isPasswordCorrect) return _error(res, { message: errorsIndex(req, 'passwordFalse') }, {}, 401)
    return next()
  }
}
