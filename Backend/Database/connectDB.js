const mongoose = require('mongoose');
const connectDB =  async () => {
try{
  await mongoose.connect("mongodb://127.0.0.1:27017/Complaint-tracker")
  console.log("mongo db connected")
}
catch (err) {
console.log(err)
}
}

module.exports = connectDB;