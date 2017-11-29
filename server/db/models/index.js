'use strict'

const User = require('./user')
const Location = require('./location')
const Question = require('./question')
const UserQuestion = require('./userQuestion')


Location.belongsTo(User)
User.hasMany(Location)

Location.hasMany(Question)
Question.belongsTo(Location)

User.belongsToMany(Question, { through: UserQuestion })
Question.belongsToMany(User, { through: UserQuestion })


module.exports = {
  User,
  Location,
  Question,
  UserQuestion
}
