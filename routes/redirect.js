const router = require('express').Router()
const controller = require('../controllers/redirect_url')

router.get('/', controller.redirect_url)