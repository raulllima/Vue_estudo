// Use Variable Environment
require('dotenv').config()

// Import Express + Cors
const express = require('express')
const cors = require('cors')
const app = express()

// Create Routes
const routes = require('./src/routes/routes')

// Define Attributes
app.use(express.json())
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});
app.use(routes)

// Initialize Server
app.listen(process.env.API_PORT, () => {
  console.log(`Server listening on port: ${process.env.API_PORT} \n`)
})