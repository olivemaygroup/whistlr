const Profile = require('../models/profileModel.jsx')
const mongoose = require('mongoose')

// Get profile
const getProfile = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No profile'})
  }
  const profile = await Profile.findById(id)

  if(!profile) {
    res.status(404).json({error: 'No profile'})
  }
  res.status(200).json(profile)
}


// Create profile
const createProfile = async (req, res) => {
  const {
    firstname,
    surname,
    gender,
    dateofbirth,
    phonenumber,
    companyname,
    ceoname,
    ceoemail,
    hrname,
    hremail,
    companywebsite,
    companylinkedin,
    companytwitter,
  } = req.body

  //TODO: fields to handle later

  try {
    const user_id = req.user._id
    const profile = await Profile.create({
      firstname,
      surname,
      gender,
      dateofbirth,
      phonenumber,
      companyname,
      ceoname,
      ceoemail,
      hrname,
      hremail,
      companywebsite,
      companylinkedin,
      companytwitter,
      user_id
    })
    res.status(200).json(profile)
  } catch (error) {
    console.log('create profile error: ', error)
    res.status(400).json({error: error})
  }
}

module.exports = {
  createProfile,
  getProfile
}