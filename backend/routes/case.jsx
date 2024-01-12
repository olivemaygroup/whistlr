const express = require('express');
const { createCase, getCases } = require('../controller/caseController.jsx')
const requireAuth = require('../middleware/requireAuth.jsx')

const router = express.Router()


// require authentication
router.use(requireAuth)

// get all
router.get('/:id', getCases)

// add case

router.post('/create', createCase)
// delete case

// Update case

module.exports = router;