/**
 * Error code define
 */

const errors = {
  nameNull: {
    message: 'Contact name is required.',
    code: 4001
  },
  emailNull: {
    message: 'Email is required.',
    code: 4002
  },
  passwordNull: {
    message: 'Password is required.',
    code: 4003
  },
  confirmPassNull: {
    message: 'Confirm password is required.',
    code: 4004
  },
  NameIsNotAValidName: {
    message: 'Name is not a valid name. Maximum 30 characters.',
    code: 4005
  },
  EmailIsNotAValidEmailAddress: {
    message: 'Email is not a valid email address. Example: charlieputh.singer@yahoo.com',
    code: 4006
  },
  ThePasswordIsNotValid: {
    message: 'The password is not valid. Must be at least 8 charaters and 1 number.',
    code: 4007
  },
  confirmPassFalse: {
    message: 'Confirm password does not match',
    code: 4008
  },
  nameExits: {
    message: 'Your name is already registered .',
    code: 4009
  },
  registerFalse: {
    message: 'Register failed !',
    code: 4010
  },
  passwordFalse: {
    message: 'The password is incorrect.',
    code: 4011
  },
  nameDoesNotExits: {
    message: 'Your name is not registered yet.',
    code: 4013
  },
  tokenNotFormat: {
    message: 'Token is required.',
    code: 4014
  },
  tokenFalse: {
    message: 'token false',
    code: 4015
  },
  tokenDoesNotGetProfile: {
    message: 'Login failed, please try again',
    code: 4016
  },
  startDateNull: {
    message: 'Start date is required',
    code: 4017
  },
  dueDateNull: {
    message: 'Due date is required',
    code: 4018
  },
  nameEventNull: {
    message: 'Your name event is required',
    code: 4019
  },
  addEventFalse: {
    message: 'Add new event false.',
    code: 4020
  },
  eventDoesNotExits: {
    message: 'Event does not exits',
    code: 4021
  }
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
