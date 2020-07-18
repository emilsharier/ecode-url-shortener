const sendMessage = require('../controllers/send_message')

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

const verifyLink = async (req, res, next) => {

    let url = req.body.Body
    console.log(url)
    if (validURL(url)) {
        console.log('link is verified')
        next()
    } else {
        sendMessage(res, 'This isn\' a valid url')
        return
    }
}

module.exports = verifyLink