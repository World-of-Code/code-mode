'use strict'

const Sequelize = require('sequelize')
const db = require('../../db')


const Question = db.define('question', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  hints: Sequelize.ARRAY(Sequelize.TEXT),
  answer: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})


module.exports = Question
