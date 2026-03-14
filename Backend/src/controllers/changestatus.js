const express = require('express');
const changestatus = express.Router()
const adminauth = require('../middleware/adminauth.js')
const complaints = require('../../Database/complainschema.js')
changestatus.put('/update/:id', adminauth, async (req , res) => {
  const {status} =  req.body;
  const complaint = await complaints.findByIdAndUpdate(req.params.id
    , {status:status},
    {new:true}
  )
  res.json(complaint);

})

module.exports = changestatus;