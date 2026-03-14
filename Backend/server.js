const express = require("express")
const app = require("./src/app.js");
const connectDB = require('./Database/connectDB.js')
connectDB();
const PORT = 5000;

app.listen(PORT , () =>{
  console.log(`Server started on port localhost:${PORT}/`)
})

