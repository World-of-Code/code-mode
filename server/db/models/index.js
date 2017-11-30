'use strict'

const User = require('./user')
const Location = require('./location')
const Question = require('./question')
const UserQuestion = require('./userQuestion')


Location.hasMany(Question)
Question.belongsTo(Location)

Question.belongsTo(User)
User.hasMany(Question)

User.belongsToMany(Question, { through: UserQuestion })
Question.belongsToMany(User, { through: UserQuestion })


module.exports = {
  User,
  Location,
  Question,
  UserQuestion
}
