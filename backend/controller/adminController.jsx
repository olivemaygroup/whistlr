const Case = require('../models/caseModel.jsx')
const mongoose = require('mongoose')


// Get all
const getReported = async (req, res) => {

  const reportedCases = await Case.find({reported: true}).sort({createdAt: -1})
  console.log(reportedCases)
  res.status(200).json(reportedCases);
}

module.exports = {
  getReported
}