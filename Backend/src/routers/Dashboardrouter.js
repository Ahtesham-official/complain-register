const express  = require('express');
const dashboardrouter =  express.Router()
const adminauth = require('../middleware/adminauth.js')

dashboardrouter.get('/dashboard' , adminauth , (req , res) => {
    
})

module.exports = dashboardrouter;
