const express = require('express')
const AuthController = require('./../app/Controllers/api/AuthhController')
const ok = require('../app/Responses/ok')
const Validate = require('../app/Policies/Validation/AuthValidate')
const Middleware = require('../app/Policies/Middleware/AuthMiddlaware')
const AuthMiddleWare = require('../app/Policies/Middleware/auth')
const Event = require('../app/Controllers/api/EventController')
const router = express.Router()

router.get('/health-check', (req, res) => ok(res))

// Authentication
router.route('/register').post(Validate.register, Middleware.register, AuthController.register)
router.route('/login').post(Validate.login, Middleware.login, AuthController.login)

// Events
router.route('/event')
  .get(AuthMiddleWare.checkAuth, Event.listEvents)
  .post(AuthMiddleWare.checkAuth, Validate.event, Event.addEvent)
router.route('/event/:id')
  .get(AuthMiddleWare.checkAuth, Event.showEvent)
  .put(AuthMiddleWare.checkAuth, Validate.event, Event.updateEvent)
  .delete(AuthMiddleWare.checkAuth, Event.deleteEvent)
module.exports = router
