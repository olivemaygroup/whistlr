const Incident = require('../models/incidentModel.jsx')
const mongoose = require('mongoose')

// Get incidents

const getIncidents = async (req, res) => {
  const case_id  = req.params.id

  console.log('get incident controller', req.params.id)

  const incidents = await Incident.find({ case_id }).sort({date: -1})

  console.log('incidents at the controller', incidents)
  res.status(200).json(incidents)
} 

// Create incidents

const createIncident = async (req, res) => {
  const {
    date,
    recurring,
    medium,
    location,
    platform,
    witnessed,
    grade,
    description,
    case_id,
  } = req.body

  let emptyFields = []

  if (!date) {
    emptyFields.push('date')
  }
  if (!recurring) {
    emptyFields.push('first')
  }
  if (!medium) {
    emptyFields.push('medium')
  }
  if (!location) {
    emptyFields.push('location')
  }
  if (!platform) {
    emptyFields.push('platform')
  } 
  if (!witnessed) {
    emptyFields.push('Witnessed')
  }
  if (!grade) {
    emptyFields.push('grade')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({error: emptyFields})
  }
  
  try {

    const user_id = req.user._id
    const newIncident = await Incident.create({
      date,
      recurring,
      medium,
      location,
      platform,
      witnessed,
      grade,
      description,
      user_id,
      case_id
    })

    res.status(200).json(newIncident)

  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Internal server error'})
  }
}

const deleteIncident = async (req, res) => {
  const incidentId = req.params.id;
  console.log('Controller incidentId: ', incidentId)
  if (!mongoose.Types.ObjectId.isValid(incidentId)) {
    return res.status(400).json({error: 'No incident'})
  }
  const deleteIncident = await Incident.findOneAndDelete({_id: incidentId})

  if (!deleteIncident) {
    return res.status(400).json({error: 'No incident'})
  }
  res.status(200).json(deleteIncident)

}

module.exports = {
  createIncident,
  getIncidents,
  deleteIncident

}