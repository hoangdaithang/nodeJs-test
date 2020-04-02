const _error = require('../../Responses/error')
const { errorsIndex } = require('../../Utils/errorsFunc')
const Joi = require('joi')

module.exports = {
  register: (req, res, next) => {
    const { email, password, confirmPass, name } = req.body
    if (!email) return _error(res, { message: errorsIndex(req, 'emailNull') }, {}, 400)
    if (!password) return _error(res, { message: errorsIndex(req, 'passwordNull') }, {})
    if (!confirmPass) return _error(res, { message: errorsIndex(req, 'confirmPassNull') }, {})
    if (!name) return _error(res, { message: errorsIndex(req, 'nameNull') }, {})

    // check joi
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(30).required().error(new Error(errorsIndex(req, 'NameIsNotAValidName'))),
      email: Joi.string().email().required().error(new Error(errorsIndex(req, 'EmailIsNotAValidEmailAddress'))),
      password: Joi.string().regex(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).required().error(new Error(errorsIndex(req, 'ThePasswordIsNotValid')))
    })
    Joi.validate({ email, password, name }, schema, (err, value) => {
      if (err) return _error(res, { message: err.message }, {}, 400)
      return next()
    })
  },
  login: (req, res, next) => {
    const { name, password } = req.body
    if (!password) return _error(res, { message: errorsIndex(req, 'passwordNull') }, {})
    if (!name) return _error(res, { message: errorsIndex(req, 'nameNull') })
    return next()
  },
  event: (req, res, next) => {
    const { name, startDate, dueDate } = req.body
    if (!startDate) return _error(res, { message: errorsIndex(req, 'startDateNull') }, {})
    if (!dueDate) return _error(res, { message: errorsIndex(req, 'dueDatedNull') }, {})
    if (!name) return _error(res, { message: errorsIndex(req, 'nameEventNull') }, {})

    return next()
  }
}
