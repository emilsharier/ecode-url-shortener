const sequelize = require('../ORM/sequelize')
const { DataTypes } = require('sequelize')

const ShortUrl = sequelize.define('short_url', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    original_url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    short_url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = ShortUrl