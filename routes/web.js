
const HomeController = require('../app/Controllers/Http/HomeController')
const homeController = new HomeController()

module.exports = (app) => {
  /* GET home page. */
  app.get('/', homeController.index)
}
