const User = require('../models/userModel.jsx')
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.SECRET || 'not_a_secret'

const createToken = (_id) => {
  return jwt.sign({_id: _id}, jwtSecret, { expiresIn: '3d' })
}

// Login

const userLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    
    const token = createToken(user._id)
    res.status(200).json({email, token})

  } catch (error) {
    console.log('Login error: ', error)
    res.status(500).json({error: 'internal server error'})
  }
}


// Signup

const userSignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password)

    const token = createToken(user._id)
    res.status(200).json({email, token})

  } catch (error) {
    console.log('signup error: ', error.message)
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  userSignup,
  userLogin
}

