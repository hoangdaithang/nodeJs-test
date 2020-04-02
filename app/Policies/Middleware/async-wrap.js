'use strict'

function asyncWrap (fn) {
  async function asyncifyWrap (req, res, next) {
    try {
      return await fn.apply(null, arguments)
    } catch (err) {
      next(err)
    }
  }
  return asyncifyWrap
}

module.exports = asyncWrap
