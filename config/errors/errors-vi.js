/**
 * Error code define
 */

const errors = {
}
module.exports = {
  error: (errorCode, req) => {
    if (!errorCode || !req) {
      throw Error('error require `errorCode` & `req` parameters')
    }
    const error = errors[errorCode]
    if (!error) {
      throw new Error('Not Found Error in errors.js')
    }
    const ERROR = {
      message: req.__(error.message),
      code: error.code
    }
    return ERROR
  },
  errors,
  getError: error => {
    if (!error) {
      throw new Error(`Not found error: ${error}`)
    }
    return error
  }
}
