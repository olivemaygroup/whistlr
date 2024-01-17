const Profile = require('../models/profileModel.jsx')
const mongoose = require('mongoose')

// Get profile
const getProfile = async (req, res) => {
  const user_id = req.user._id
  
  console.log(user_id)
  const profile = await Profile.find({ user_id })

  if(!profile) {
    res.status(400).json({error: 'No profile for this user id'})
  }
  res.status(200).json(profile)
}


// Create profile
const createProfile = async (req, res) => {
  console.log('controller body', req.body)
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
    companytwitter,
    
  } = req.body

  let emptyFields = []

  if (!firstname) {
    emptyFields.push('firstname')
  }
  if (!surname) {
    emptyFields.push('surname')
  }
  if (!gender) {
    emptyFields.push('gender')
  }
  if (!dateofbirth) {
    emptyFields.push('dob')
  }
  if (!phonenumber) {
    emptyFields.push('phonenumber')
  }
  if (!companyname) {
    emptyFields.push('company')
  }
  if (!ceoname) {
    emptyFields.push('ceoname')
  }
  if (!companywebsite) {
    emptyFields.push('website')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all fields', emptyFields})
  }
  
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
      companytwitter,
      user_id
    })

    
    res.status(200).json(profile)
  } catch (error) {
    console.log('create profile error: ', error)
    res.status(500).json({error: 'Internal server error'})
  }
}

module.exports = {
  createProfile,
  getProfile
}