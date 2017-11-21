'use strict'

const router = require('express').Router()
const { Location } = require('../../db/models')

// find location by id
// router.param('/:urlId', (req, res, next, id) => {
//   // send out req.body.location
// })

// get all locations
router.get('/', (req, res, next) =>{
  Location.findAll({include: [{all: true}]})
    .then(locations => res.json(locations))
    .catch(next)
})

// create a location
router.post('/', (req, res, next) =>{

})

// get location by id
router.get('/:id', (req, res, next) =>{
  Location.findById(req.params.id, {include: [{all: true}]})
    .then(location => res.json(location))
    .catch(next)
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
