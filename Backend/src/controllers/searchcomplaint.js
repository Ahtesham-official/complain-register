const express = require('express');
const searchcomplaint =  express.Router()
const complaints = require('../../Database/complainschema.js')
const mongoose = require('mongoose')

searchcomplaint.get('/complaint/:_id' , async (req , res) => {
  const id  = req.params._id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.json({
      message:"Invalid complaint ID"
    })
  }
  try{
    const complaint = await complaints.findById(req.params._id)
    if(!complaint){
      return res.json({
        message:"Complaint not found"
      })
    }
    res.json({
      complaint:complaint,
      message:"Complaint found successfully"
    })
  }
  catch (err) {
    res.status(500).json({  
      message:"Error fetching complaint",})
  }
})
module.exports = searchcomplaint;