const register = async(req,res)=>{
  res.send('Resiter user')
}

const login = async(req,res)=>{
  res.send('Login user')
}

module.exports = {
  register,
  login,
}