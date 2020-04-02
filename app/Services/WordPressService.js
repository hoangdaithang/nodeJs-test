'use strict'

const hasher = require('wordpress-hash-node')

module.exports = {
  /**
     * @param originPass
     * @param dbPass
     * @return {*}
     */
  hashPassword: password => {
    return hasher.HashPassword(password)
  },
  checkPassword: (originPass, dbPass) => {
    const checked = hasher.CheckPassword(originPass, dbPass)
    return checked
  }
}
