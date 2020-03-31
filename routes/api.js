const express = require('express')

const ok = require('../app/Responses/ok')
const router = express.Router()

router.get('/health-check', (req, res) => ok(res))
module.exports = router
