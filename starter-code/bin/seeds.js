// Iteration #1
const droneData = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
]

Drone = require('../models/drone.js') 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Drone')

Drone.create(droneData,(err,data)=>{
  if(err) {
    console.log(err)
    throw err
  } else {
    console.log(`Created drone ${data.name}`)
    console.log(`Drone ID in mongo DB is ${data._id}`)
  }
  mongoose.disconnect('mongodb://localhost/Drone')
}
)
