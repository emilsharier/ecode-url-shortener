const sequelize = require('./sequelize')

const init = async () => {
    await sequelize.sync({
        logging: false
    })
}

module.exports = init