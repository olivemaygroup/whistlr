const express = require('express');
const { createIncident, getIncidents, deleteIncident } = require('../controller/incidentController.jsx') 
const requireAuth = require('../middleware/requireAuth.jsx')

const router = express.Router()

router.use(requireAuth)

router.post('/create', createIncident)

router.get('/:id', getIncidents)

router.delete('/:id', deleteIncident)

module.exports = router;