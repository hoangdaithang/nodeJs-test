const express = require('express')
const AuthController = require('./../app/Controllers/api/AuthhController')
const ok = require('../app/Responses/ok')
const Validate = require('../app/Policies/Validation/AuthValidate')
const Middlaware = require('../app/Policies/Middleware/AuthMiddlaware')
const router = express.Router()

router.get('/health-check', (req, res) => ok(res))

// Authentication
router.route('/register').post(Validate.register, Middlaware.register, AuthController.register)
router.route('/login').post(Validate.login, Middlaware.login, AuthController.login)
module.exports = router
