'use strict'

const router = require('express').Router()


// find location by id
router.param('/:urlId', (req, res, next, id) => {
  // send out req.body.location
})

// get all locations
router.get('/', (req, res, next) =>{
  //findAll where url is req.body.url
})

// create a location
router.post('/', (req, res, next) =>{

})

// get location by id
router.get('/:id', (req, res, next) =>{
  // req.body.location
})

// edit location by id
router.put('/:id', (req, res, next) =>{
  // req.body.location
})

// delete location by id
router.delete('/:id', (req, res, next) =>{
  // req.body.location
})


module.exports = router
