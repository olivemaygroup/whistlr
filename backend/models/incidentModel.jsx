const mongoose = require('mongoose')

const Schema = mongoose.Schema

const incidentSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  recurring: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  witnessed: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  }, 
  case_id: {
    type: Schema.Types.ObjectId,
    ref: 'Case',
    required: true,
  }

})

module.exports = mongoose.model('Incident', incidentSchema)