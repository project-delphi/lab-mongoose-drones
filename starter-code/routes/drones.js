const express = require('express')

// require the Drone model here

const router = express.Router()
const Drone  = require('../models/drone')

router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {

  })
  res.render('drones/index', {
    drones: drones
  })
})


router.get('/drones/new', (req, res, next) => {
// Iteration 3
  res.render('/drones/new')
})

router.post('/drones', (req, res, next) => {
// Iteration 3
  const drone_data = {
    name : req.body.name,
    propellers : req.body.propellers,
    maxSpeed : req.body.maxSpeed
  }
    drone = new Drone(drone_data)
    drone.save( , (err, data) => {
      if(err){
      next()
      } else {
        router.get('/drones')
      }
  })
})

module.exports = router
