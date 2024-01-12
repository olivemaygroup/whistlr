const express = require('express');
const { createProfile, getProfile } = require('../controller/profileController.jsx')
const requireAuth = require('../middleware/requireAuth.jsx')

// Create router
const router = express.Router()

// Require authnetication
router.use(requireAuth)

// Create profile
router.post('/createprofile', createProfile)

// get profile
router.get('/getprofile/:id', getProfile)

module.exports = router;