const express = require("express")
const path = require('path')
const app = express();
const dashboardrouter = require('./routers/Dashboardrouter.js')
const searchcomplaint = require('./controllers/searchcomplaint.js')
const adminrouter = require('./routers/Adminrouter.js')
const submitcomplaint = require('./controllers/submitcomplaint.js')
app.use(express.json());
app.use(express.static(path.join(__dirname,'../../Frontend/dist')))
app.use('/fetch' , dashboardrouter)
app.use('/admin' , adminrouter)
app.use('/api' , submitcomplaint)
app.use('/api' , searchcomplaint)
app.use((req , res) => {
  res.sendFile(path.join(__dirname,'../../Frontend/dist/index.html'))
})

module.exports = app;