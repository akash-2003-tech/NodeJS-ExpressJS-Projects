const express = require('express')
const mongoose = require('mongoose')
const app = express()

const connectDB = (url)=>{
  return mongoose.connect(url)
}

module.exports = connectDB
