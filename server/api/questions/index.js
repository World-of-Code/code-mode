'use strict'

const router = require('express').Router()
const { Question, UserQuestion } = require('../../db/models')

// // find question by id
// router.param('/:questionId', (req, res, next, id) => {
//   // send out req.body.question
// })

// get all questions
router.get('/', (req, res, next) =>{
  Question.findAll({
    include: [{all: true}]
  })
    .then(questions => res.json(questions))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(next)
})

// create a question
// router.post('/', (req, res, next) =>{

// })

// get question by id
// router.get('/:id', (req, res, next) =>{
//    Question.findById(req.params.id)
//     .then(question => )
// })

// edit question by id
router.put('/:id', (req, res, next) =>{
  // req.body.question
})

// delete question by id
router.delete('/:id', (req, res, next) =>{
  // req.body.question
})


module.exports = router






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

router.post('/:questionId', (req, res, next) => {
  UserQuestion.create(req.body)
    .then(userCode => res.json(userCode))
    .catch(next)
})

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
