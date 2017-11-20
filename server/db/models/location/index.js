'use strict'

const Sequelize = require('sequelize')
const db = require('../../db')


const Location = db.define('location', {
  url: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isUrl: true
    }
  }
})


module.exports = Location
