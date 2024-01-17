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
    department,
    influence,
    frequency,
    projects,
    travel,
    outsideContact,
    feelSafe,
    level,
    reported
  } = req.body

  let emptyFields = []

    if (!firstName) {
      emptyFields.push('firstname')
    }
    if (!surname) {
      emptyFields.push('surname')
    }
    if (!gender) {
      emptyFields.push('gender')
    }
    if (!age) {
      emptyFields.push('age')
    }
    if (!email) {
      emptyFields.push('email')
    }
    if (!maritalStatus) {
      emptyFields.push('married')
    }
    if (!seniority) {
      emptyFields.push('seniority')
    }
    if (!grade) {
      emptyFields.push('grade')
    }
    if (!department) {
      emptyFields.push('department')
    }
    if (!influence) {
      emptyFields.push('influence')
    }
    if (!frequency) {
      emptyFields.push('frequency') 
    }
    if (!projects) {
      emptyFields.push('projects') 
    }
    if (!travel) {
      emptyFields.push('travel')
    }
    if (!outsideContact) {
      emptyFields.push('outsidecontact')
    }
    if (!feelSafe) {
      emptyFields.push('safe')
    }
    if (!level) {
      emptyFields.push('level')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }

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
      department,
      influence,
      frequency,
      projects,
      travel,
      outsideContact,
      feelSafe,
      level,
      reported,
      user_id
    })
    res.status(200).json(newCase)

  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Internal server error'})
  }
}

// Delete

const deleteCase = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No case'})
  }

  const deletedCase = await Case.findOneAndDelete({_id: id})

  if(!deletedCase) {
    return res.status(400).json({error: 'No case'})
  }
  res.status(200).json(deletedCase)

}


// Update

const updateCase = async (req, res) => {
  const reported = req.body.reported;
  console.log('Reported at controller', reported)
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No case'})
  }

  const updateCase = await Case.findOneAndUpdate(
    {_id: id},
    {reported: reported},
    {new: true}
    )
  if(!updateCase) {
    return res.status(400).json({error: 'No case to update'})
  }
  console.log('controller res: ', updateCase)
  res.status(200).json(updateCase)
}

module.exports = {
  createCase,
  getCases,
  deleteCase,
  updateCase
}