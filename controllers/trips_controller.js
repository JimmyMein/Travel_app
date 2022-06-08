const express = require('express')
const router = express.Router()

const Trip = require('../models/trip')

router.get('/', (req, res) => {
  Trip.findAll()
  .then(trips => res.json(trips)) 
})

router.post('/', (req, res) => {
  const {name, start_date, end_date} = req.body
  Trip
  .create(name, start_date, end_date)
  .then(trip => res.json(trip))
})

router.put('/:id', (req, res) => {
  const {name, start_date, end_date} = req.body
  const tripId = req.params.id
  Trip
  .edit(name, start_date, end_date, tripId)
  .then(trip => res.json(trip))
})

router.delete('/:id', (req, res) => {
  const tripId = req.params.id

  Trip
  .delete(tripId)
  .then(() => res.json({message: 'deleted successfully'}))
})

module.exports = router