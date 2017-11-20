'use strict'

const router = require('express').Router()


// find question by id
router.param('/:questionId', (req, res, next, id) => {
  // send out req.body.question
})

// get all questions
router.get('/', (req, res, next) =>{
  //findAll where url is req.body.url
})

// create a question
router.post('/', (req, res, next) =>{

})

// get question by id
router.get('/:id', (req, res, next) =>{
  // req.body.question
})

// edit question by id
router.put('/:id', (req, res, next) =>{
  // req.body.question
})

// delete question by id
router.delete('/:id', (req, res, next) =>{
  // req.body.question
})


module.exports = router
