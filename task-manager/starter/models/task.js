const mongoose = require('mongoose')

//Creating a schema that structure our all documents 

const TaskSchema = new mongoose.Schema({
  name:{
    type:String,
    require:[true,'must provide name'],
    trim:true,
    maxlength:[20,'name cannot be more than 20 characters']
  } ,
  completed:{
    type:Boolean ,
    default:false,
  } 
})


module.exports= mongoose.model('Task',TaskSchema)