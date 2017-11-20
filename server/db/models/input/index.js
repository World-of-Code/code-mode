'use strict'

const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../../db')


const Input= db.define('input', {
  text: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
})

module.exports = Input
