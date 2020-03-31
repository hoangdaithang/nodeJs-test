const express = require('express')
const authValidation = require('../app/Policies/Validation/authValidation')
const checkMiddleware = require('../app/Policies/Middleware/checkMiddleware')
const ok = require('../app/Responses/ok')
const router = express.Router()

router.get('/health-check', (req, res) => ok(res))

// Authentication
router.route('/register').post(authValidation.register)
module.exports = router
