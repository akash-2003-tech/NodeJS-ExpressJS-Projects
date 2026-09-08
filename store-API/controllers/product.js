const Product = require('../model/product')

const getAllProductsStatic = async(req,res)=>{
  const products = await Product.find({
    name:'vase table',
  })

  res.status(200).json({products,nbHits:products.length})
}

const getAllProduct = async(req,res)=>{
  res.status(200).json({msg:'products route'})
}

module.exports ={
  getAllProductsStatic ,
  getAllProduct 
}