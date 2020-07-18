const MessagingResponse = require('twilio').twiml.MessagingResponse

const sendMessage = (res, message) => {
    const twiml = new MessagingResponse()
    twiml.message(message)
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

module.exports = sendMessage