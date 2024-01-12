const mongoose = require('mongoose');

const Schema = mongoose.Schema

const caseSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  seniority: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  influence: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  projects: {
    type: String,
    required: true,
  },
  travel: {
    type: String,
    required: true,
  },
  outsideContact: {
    type: String,
    required: true,
  },
  outsideContact: {
    type: String,
    required: true,
  },
  feelSafe: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true
  }
  // user_id to add later
}, { timestamps: true })

module.exports = mongoose.model('Case', caseSchema)