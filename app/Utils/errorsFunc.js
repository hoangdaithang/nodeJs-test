const _errorEn = require('../../config/errors/errors-en')
const _errorVi = require('../../config/errors/errors-vi')
const _successEn = require('../../config/success/success-en')
const _successVi = require('../../config/success/success-vi')
const errorsIndex = (req, errorCode) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const string = {
      acceptLanguages: 'accept-language',
      errorCode: errorCode
    }
    let messageErrors
    const languagesClient = req && req.headers && req.headers[string.acceptLanguages] ? req.headers[string.acceptLanguages] : 'en'
    if (languagesClient === 'vi') {
      messageErrors = _errorVi.errors[string.errorCode] ? _errorVi.errors[string.errorCode].message : errorCode
    } else {
      messageErrors = _errorEn.errors[string.errorCode] ? _errorEn.errors[string.errorCode].message : errorCode
    }
    return messageErrors
  } catch (e) {
    throw e
  }
}
const successIndex = (req, successCode) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const string = {
      acceptLanguages: 'accept-language',
      successCode: successCode
    }
    let messageSuccess
    const languagesClient = req && req.headers && req.headers[string.acceptLanguages] ? req.headers[string.acceptLanguages] : 'en'
    if (languagesClient === 'vi') {
      messageSuccess = _successVi.success[string.successCode].message
    } else {
      messageSuccess = _successEn.success[string.successCode].message
    }
    return messageSuccess
  } catch (e) {
    throw e
  }
}
const checkArray = (array) => {
  // eslint-disable-next-line no-useless-catch
  try {
    if (Array.isArray(array) && array.length > 0) {
      return true
    } else {
      return false
    }
  } catch (e) {
    throw e
  }
}
module.exports = {
  errorsIndex,
  successIndex,
  checkArray
}
