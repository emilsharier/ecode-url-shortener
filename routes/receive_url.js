const router = require('express').Router()
const verifyLink = require('../middlewares/verify_link')
const controller = require('../controllers/url_shorten_controller')

router.post('/:shortUrl', [ verifyLink ], controller.shortenUrl)

module.exports = router