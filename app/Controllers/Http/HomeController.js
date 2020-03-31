
class HomeController {
  async index (req, res, next) {
    res.render('index', { title: 'Express' })
  }
}

module.exports = HomeController
