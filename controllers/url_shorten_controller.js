const short_url = require('../models/short_url')
const shortId = require('shortid')
const sendMessage = require('./send_message')

const shortenUrl = async (req, res) => {
    let short = shortId.generate()
    try {
        let result = await short_url.create({
            original_url: req.body.Body,
            short_url: short
        })
        sendMessage(res, `http://ecode.pw/${short}`)
        return
    } catch (ex) {
        sendMessage(res, 'Sorry for the inconvenience 😐. An error occured.')
        console.log(ex)
        throw ex
    }
}

module.exports = { shortenUrl }