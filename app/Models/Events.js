const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date },
  dueDate: { type: Date },
  userId: { type: String },
  description: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const Events = mongoose.model('Events', EventSchema, 'events')

module.exports = Events
