const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
})

// Static signup method with validator 

userSchema.statics.signup = async function (email, password) {

  if (!email || !password) {
    
  //  return res.status(400).json({error: 'complete all fields'})
   throw Error ('Complete all fields')
  }
  if (!validator.isEmail(email)) {
    throw Error ('Not a valid email')
  }
  if (!validator.isStrongPassword(password)) {
    // return res.status(400).json({error: '8 characters, uppercase, number and symbol required'})
    throw Error ('8 characters, uppercase, number and symbol required')
  }
  
  const exists = await this.findOne({ email })
  
  if (exists) {
    // return res.status(400).json({error: 'Email already in use'})
    throw Error ('Email already in use')
  }
  
  const salt =  await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt)
  
  const user = await this.create({ email, password: hash})
  
  return user
}

// Static login method with validator

userSchema.statics.login = async function (email, password) {
  
  if (!email || !password) {
    // return res.status(400).json({error: 'Complete all fields'})
    throw Error ('Complete all fields')
  }
  
  const user = await this.findOne({ email })
  if (!user) {
    // return res.status(400).json({error: 'Incorrect email'})
    throw Error ('Incorrect email')
  }
  
  const match = await bcrypt.compare(password, user.password)
  
  if (!match) {
    // return res.status(400).json({error: 'Incorrect password'})
    throw Error ('Incorrect password')
  }
  return user
}

module.exports = mongoose.model('User', userSchema)