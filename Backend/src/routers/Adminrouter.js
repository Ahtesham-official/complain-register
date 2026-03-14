const express = require("express");
const adminrouter = express.Router();
const admins = require('../../Database/adminschema.js');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "MY_KEY";
adminrouter.post('/login' , async (req , res) => {
const {username , password} = req.body;
try {
  const admin = await admins.findOne({username:username})
if(!admin){
  console.log("Admin not found")
  return res.status(404).json({message:"Admin not found"})
}
if(admin.password !== password){
  console.log("Invalid password")
  return res.status(401).json({message:"Invalid password"})
}
const token = jwt.sign(
  {username: admin.username},
  SECRET_KEY,
  {expiresIn : "1h"}
)
console.log("Login successful")
res.json({message:"Login successful",
  token:token,
  admin:admin.username
})
}
catch (error) {
  res.status(500).json({message:"Internal server error"})
}

})

module.exports = adminrouter;