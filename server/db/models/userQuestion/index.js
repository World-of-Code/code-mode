'use strict'

const Sequelize = require('sequelize')
const db = require('../../db')


const UserQuestion = db.define('user_question', {
  userCode: Sequelize.TEXT
})

module.exports = UserQuestion
