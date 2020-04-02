const _ok = require('../../Responses/ok')
const _error = require('../../Responses/error')
const AuthRepositories = require('../../Repositories/AuthRepositories')
const asyncWrap = require('../../Policies/Middleware/async-wrap')
const { errorsIndex, successIndex } = require('../../Utils/errorsFunc')

module.exports = {
  register: asyncWrap(async (req, res) => {
    const data = await AuthRepositories.register(req)
    if (data && data.status === false) {
      return _error(res, { message: errorsIndex(req, data.error) }, {}, 400)
    }
    return _ok(res, { data, message: successIndex(req, 'registerSuccess') }, 201)
  }),
  login: asyncWrap(async (req, res) => {
    const data = await AuthRepositories.login(req)
    if (data && data.status === false) {
      return _error(res, { message: errorsIndex(req, data.error) }, {}, 401)
    }
    return _ok(res, { data, message: successIndex(req, 'registerSuccess') }, 200)
  })
}
