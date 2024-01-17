const express = require('express');
const { createCase, getCases, deleteCase, updateCase } = require('../controller/caseController.jsx')
const requireAuth = require('../middleware/requireAuth.jsx')

const router = express.Router()


// require authentication
router.use(requireAuth)

// get all
router.get('/', getCases)

// add case

router.post('/create', createCase)
// delete case

router.delete('/:id', deleteCase)

// Update case

router.patch('/:id', updateCase)

module.exports = router;