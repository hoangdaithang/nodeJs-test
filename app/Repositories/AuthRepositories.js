const Users = require('../Models/Users')
const WordPressService = require('../Services/WordPressService')
const jwtService = require('../Services/JwtService')

module.exports = {
  register: async (req) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const { name, password, email, about, phone, gender } = req.body
      const hash = await WordPressService.hashPassword(password)
      const record = await new Users({
        name,
        password: hash,
        email,
        about,
        phone,
        gender
      }).save()
      if (record) return { name }
      return {
        status: false,
        error: 'registerFalse'
      }
    } catch (e) {
      return e.message
    }
  },
  login: async (req) => {
    try {
      const user = req.user
      const informationUser = {
        _id: user.id,
        name: user.name,
        phone: user.phone,
        gender: user.gender || '',
        about: user.about
      }
      const token = await jwtService.generateUserToken(informationUser)
      return {
        token,
        user: informationUser
      }
    } catch (e) {
      return e.message
    }
  }
}
