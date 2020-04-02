/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok();
 * return res.ok({data: dataReturn, message: "message here"});
 *
 * @param  {Object} options
 *    {string, object} data
 *    {string, object} message
 */

module.exports = (res, options = {}, statusCode = 200) => {
  const {
    data,
    total,
    message,
    pagination
  } = options

  // Set status code
  res.status(200)

  const response = {
    status: statusCode,
    data: data || null,
    message: message || 'Success',
    total: total,
    success: true
  }

  if (typeof pagination !== 'undefined') {
    response.pagination = pagination
  }

  return res.json(response)
}
