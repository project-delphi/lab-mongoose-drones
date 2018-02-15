const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Drone')
const Schema   = mongoose.Schema

const DroneSchema = new Schema({
  name       : String,
  propellers : Number,
  maxSpeed   : Number
});

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;