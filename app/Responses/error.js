/**
 * 400 (Bad Request) Handler
 * Handle for validation errors
 * Usage:
 * return res.validationError(errors);
 *
 * @param  {Object} options
 *  Properties
 *    {string} message - error message
 *    {number} error - error code
 * @param {array, object} errors - detail of errors - return from express-validator middleware
 */

module.exports = function error (res, errors, options = {}, statusCode = 200) {
  const { error } = options

  const response = {
    status: statusCode,
    message:
            errors && errors[0] && errors[0].msg
              ? errors && errors[0] && errors[0].msg
              : errors.message,
    data: null,
    success: false,
    error: error || errors.code
  }

  if (Array.isArray(errors) && errors.length > 0) {
    response.errors = errors
  }

  // Set status code
  res.status(statusCode)

  if (process.env.NODE_ENV === 'development') { response.devMessages = errors }

  return res.json(response)
}
