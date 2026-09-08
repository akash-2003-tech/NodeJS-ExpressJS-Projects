

const getAllProductsStatic = async(req,res)=>{
  
  res.status(200).json({msg:'products testing route'})
}

const getAllProduct = async(req,res)=>{
  res.status(200).json({msg:'products route'})
}

module.exports ={
  getAllProductsStatic ,
  getAllProduct 
}