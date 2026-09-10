//check username,passwor in post(login) request
//if exist create new JWT 
//send back  to front-end

//set up authentication so only the request with JWT can access the dashboard


const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async(req,res)=>{

const{username,password}= req.body

if(!username || !password){
  throw new CustomAPIError('Please provide the username and password',400)
}

const id = new Date().getDate()

const token= jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

res.status(200).json({msg:'user created',token})


//mongoose validation 
//Joi
//check in the controller 
}

const dashboard = async(req,res)=>{

  const authHeader = req.headers.authorization

  if(!authHeader || !authHeader.startsWith('Bearer') ){
     throw new CustomAPIError('No token provided',401)  // Bad request - 400 || Authentication error - 401
  }
  const token = authHeader.split(' ')[1]
  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({msg:`Hello ${decoded.username}`,secret:`Here is your lucky number ${luckyNumber}`})
  }catch(error){
    throw new CustomAPIError('Not authorized to access to this route',401)
  }

}

module.exports = {
  login,
  dashboard
}