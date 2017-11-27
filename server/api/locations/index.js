'use strict'

const router = require('express').Router()
const err = require('../utils')
const { Location } = require('../../db/models')

// find location by id
router.param('/:id', (req, res, next, id) => {
  Location.findById(id, { include: [{ all: true }] })
    .then(location => {
      if (!location) throw err(404, 'location was not found')
      else {
        req.location = location
        next()
        return null
      }
    })
    .catch(next)
})

// get location by id
router.get('/:id', (req, res, next) =>{
  res.json(req.location)
})

// create a location
router.post('/', (req, res, next) =>{
  Location.create(req.body)
    .then(location => res.status(201).json(location))
    .catch(next)
})

// edit location by id
router.put('/:id', (req, res, next) =>{
  req.location.update(req.body)
    .then(location => res.status(201).json(location))
    .catch(next)
})

// delete location by id
router.delete('/:id', (req, res, next) =>{
  req.location.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})


module.exports = router
