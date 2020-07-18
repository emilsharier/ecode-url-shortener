const short_url = require('../models/short_url')

const redirect_url = async (req, res) => {
    try {
        let id = req.params.shortUrl
        let url = await short_url.findOne({
            where: {
                short_url: id
            }
        })
        if (url) {
            res.redirect(url.original_url)
        } else {
            res.sendStaus(404)
        }
    } catch (ex) {
        return res.sendStatus(404)
    }
}

module.exports = { redirect_url }