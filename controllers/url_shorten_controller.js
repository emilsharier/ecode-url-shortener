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
        if(result) {
            sendMessage(res, `http://ecode.pw/${short}`)
        } else {
            sendMessage(res, 'Uh oh! Something went wrong')
        }
    } catch (ex) {
        console.log(ex)
        throw ex
    }
}

module.exports = { shortenUrl }