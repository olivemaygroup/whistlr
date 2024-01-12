const express = require('express');
const { createIncident, getIncidents } = require('../controller/incidentController.jsx') 
const requireAuth = require('../middleware/requireAuth.jsx')

const router = express.Router()

router.use(requireAuth)

router.post('/create', createIncident)

router.get('/:id', getIncidents)

module.exports = router;