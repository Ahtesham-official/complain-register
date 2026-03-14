const express = require('express')
const submitcomplaint = express()
const complaints = require('../../Database/complainschema.js')
const connectDB = require('../../Database/connectDB.js')
connectDB()
submitcomplaint.post('/complaint' , async (req , res) => {
  const {name , complain} = req.body;
  try{
    const newcomplaint = new complaints({
      name:name,
      complain:complain})
    await newcomplaint.save()
    res.json({
      message:"Complaint submitted successfully",
      id:newcomplaint._id
    })

  }
  catch (err) {
    res.json({
      message:"error submitting complaint",
      error:[err]
    })
  }
} )

module.exports = submitcomplaint;