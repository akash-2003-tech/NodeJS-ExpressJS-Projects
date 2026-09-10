require('dotenv').config()

const express = require('express')
const app = express()

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

app.use('/api/v1',mainRouter)

app.use(notFoundMiddleware)
app.use(errorHandler)


app.use(express.static('./public'))
app.use(express.json())

const port = process.env.PORT || 8000

const start = async()=>{
  try{
    app.listen (port,console.log(`Server is listening on port : ${port}...`))
  }catch(error){
    console.log(error)
  }
}
start()