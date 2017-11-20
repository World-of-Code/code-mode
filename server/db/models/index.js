'use strict'

const User = require('./user')
const Location = require('./location')
const Question = require('./question')


Location.belongsTo(User)
User.hasMany(Location)

Location.hasMany(Question)
Question.belongsTo(Location)


module.exports = {
  User,
  Location,
  Question
}
