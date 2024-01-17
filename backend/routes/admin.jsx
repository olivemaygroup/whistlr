const express = require('express');
const { getReported } = require('../controller/adminController.jsx')

const router = express.Router()


// get all
router.get('/', getReported)

module.exports = router