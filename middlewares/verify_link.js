const validUrl = require('valid-url')
const sendMessage = require('../controllers/send_message')

const verifyLink = async (req, res, next) => {

    let url = req.body.Body
    if (validUrl.isUri(url)) {
        next()
    } else {
        sendMessage(res, url)
    }
}

module.exports = verifyLink