'use strict'

const router = require('express').Router()
const err = require('../utils')
const { Question, UserQuestion } = require('../../db/models')


// find question by id (req.question)
router.param('/:questionId', (req, res, next, id) => {
  Question.findById(id, { include: [{ all: true }] })
    .then(question => {
      if (!question) throw err(404, 'question was not found')
      else {
        req.question = question
        next()
        return null
      }
    })
    .catch(next)
})

// get all questions from a url
router.get('/locations/:urlId', (req, res, next) => {
  Question.findAll(
    { where: { locationId: req.params.urlId } },
    { include: [{ all: true }]
  })
    .then(questions => res.json(questions))
    .catch(next)
})

// get question by id
// router.get('/:questionId', (req, res, next) => {
//   res.json(req.question)
// })


// create a question
router.post('/', (req, res, next) => {
  Question.create(req.body)
    .then(question => res.status(201).json(question))
    .catch(next)
})

// edit question by id
router.put('/:questionId', (req, res, next) =>{
  req.question.update(req.body)
    .then(question => res.status(201).json(question))
    .catch(next)
})

// delete question by id
router.delete('/:questionId', (req, res, next) =>{
  req.question.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})

// get user's code
router.get('/:questionId/users/:userId', (req, res, next) => {
  UserQuestion.findOne({
    where: {
      questionId: req.params.questionId,
      userId: req.params.userId
    }
  })
    .then(userCode => res.json(userCode))
    .catch(next)
})

// create user's code
router.post('/:questionId', (req, res, next) => {
  UserQuestion.create(req.body)
    .then(userCode => res.json(userCode))
    .catch(next)
})

// update user's code
router.put('/:questionId/users/:userId', (req, res, next) => {
  UserQuestion.update({
    where: {
      questionId: req.params.questionId,
      userId: req.params.userId
    }
  })
    .then(userCode => res.json(userCode))
    .catch(next)
})


module.exports = router
