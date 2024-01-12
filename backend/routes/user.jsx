const express = require('express');
const { userSignup, userLogin } = require('../controller/userController.jsx')

const router = express.Router()

//Signup
router.post('/signup', userSignup)

// Login
router.post('/login', userLogin)




module.exports = router;

