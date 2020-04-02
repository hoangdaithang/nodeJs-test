'use strict'

const jwt = require('jsonwebtoken')

module.exports = {
  /**
   * @param user
   * @return {*}
   */
  generateUserToken: user => {
    return jwt.sign(user, process.env.jwtSecret, { expiresIn: process.env.jwtExpiredIn })
  },
  verifyToken: (token, secret = process.env.jwtSecret) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (error, decode) => {
        if (error) resolve(error)
        resolve(decode)
      })
    })
  }

}
