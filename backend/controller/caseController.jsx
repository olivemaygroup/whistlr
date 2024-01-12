const Case = require('../models/caseModel.jsx')
const mongoose = require('mongoose')


// Get all
const getCases = async (req, res) => {
  const user_id = req.user._id
  const cases = await Case.find({ user_id }).sort({createdAt: -1})
  res.status(200).json(cases);
}

// Create new

const createCase = async (req, res) => {
  const {
    firstName,
    surname,
    gender,
    age,
    email,
    linkedIn,
    maritalStatus,
    seniority,
    grade,
    influence,
    frequency,
    projects,
    travel,
    outsideContact,
    feelSafe,
    level
  } = req.body

  // TODO: Emyty field handling to add

  try {

    const user_id = req.user._id
    const newCase = await Case.create({
      firstName,
      surname,
      gender,
      age,
      email,
      linkedIn,
      maritalStatus,
      seniority,
      grade,
      influence,
      frequency,
      projects,
      travel,
      outsideContact,
      feelSafe,
      level,
      user_id
    })
    res.status(200).json(newCase)

  } catch (error) {
    console.log(error)
    res.status(400).json({error: error})
  }
}

// Delete


// Update

module.exports = {
  createCase,
  getCases
}