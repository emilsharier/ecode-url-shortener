module.exports = (app) => {
    app.use('/', require('./receive_url'))
    app.use('/:shortUrl', require('./redirect'))
}