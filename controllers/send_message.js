const MessagingResponse = require('twilio').twiml.MessagingResponse
const twiml = new MessagingResponse()

const sendMessage = (res, message) => {
    twiml.message(message)
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

module.exports = sendMessage