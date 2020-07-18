const router = require('express').Router()
const controller = require('../controllers/redirect_url')

router.get('/:shortUrl', controller.redirect_url)

module.exports = router