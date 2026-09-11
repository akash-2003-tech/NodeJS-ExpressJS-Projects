require('dotenv').config()
const express = require('express')
const app = express()

// error handlers 
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

//extra packages 


// routes 

app.get('/',(req,res)=>{
  res.send('Jobs Api')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async()=>{
  try{
    app.listen(port,()=>{
      console.log(`Server is listening on port : ${port}...`)
    })
  }catch(error){
    console.log(error)
  }
}

start()