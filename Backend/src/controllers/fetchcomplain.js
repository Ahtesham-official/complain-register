const express = require('express');
const dashboardrouter =  express.Router()
const complaints = require('../../Database/complainschema.js')

dashboardrouter.get('/complaints' , async (req , res) => {
  try {const allcomplaints = await complaints.find()
  res.json({
    complaints:allcomplaints,
    message:"Complaints fetched successfully"
  })
}
catch(err) {
  res.status(500).json({
    message:"Error fetching complaints",
    complaints:[]
  })
}
})
module.exports = dashboardrouter;