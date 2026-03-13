const mongoose = require('mongoose')
const complainschema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  complain:{
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true,
    enum: ["requested","processing","resolved"],
    default:"requested"
  }
})
module.exports = mongoose.model("Complaint" , complainschema)