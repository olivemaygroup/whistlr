const mongoose = require('mongoose');

const Scheme = mongoose.Schema

const profileScheme = new Scheme({
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: Date,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  companyname: {
    type: String,
    required: true
  },
  ceoname: {
    type: String,
    required: true
  },
  ceoemail: {
    type: String,
    required: true
  },
  hrname: {
    type: String,
    required: false
  },
  hremail: {
    type: String,
    required: false
  },
  companywebsite: {
    type: String,
    requied: true
  },
 
  companytwitter: {
    type: String,
    required: false
  },
  user_id: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('Profile', profileScheme)