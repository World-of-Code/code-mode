'use strict'

const router = require('express').Router()
const { Input } = require('../../db/models')
module.exports = router

router.get('/', (req, res, next) =>
  Input.findAll()
    .then(input => res.json(input))
    .catch(next)
)
