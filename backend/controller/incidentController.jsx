const Incident = require('../models/incidentModel.jsx')
const mongoose = require('mongoose')

// Get incidents

const getIncidents = async (req, res) => {
  const user_id = req.user._id
  const incidents = await Incident.find({ user_id }).sort({date: -1})
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
  } = req.body

  //TODO: Handle empty fields

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
      user_id
    })

    res.status(200).json(newIncident)

  } catch (error) {
    console.log(error)
    res.status(400).json({error: error})
  }
}

module.exports = {
  createIncident,
  getIncidents

}