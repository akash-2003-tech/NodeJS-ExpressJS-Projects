const Product = require('../model/product')

const getAllProductsStatic = async(req,res)=>{
  
  const products = await Product.find({ })
  .sort('name')
  .select('name price')
  .limit(10) 
  .skip(2) 

  res.status(200).json({products,nbHits:products.length})
}

const getAllProduct = async(req,res)=>{
  const {featured,company,name,sort,fields} = req.query
  const queryObject = {}

  if(featured){
    queryObject.featured = featured === 'true' ? true: false 
  }
  if(company){
    queryObject.company = company 
  }
  if(name){
    queryObject.name = {$regex: name , $options:'i'} // i means case insensitive 
  }
  if(resultFilters){
    const operatorMap = {
      '>':'$gt',
      '>=':'$gte',
      '=':'$eq',
      '<':'$lt',
      '<=':'$lte',
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numericfilters.replace(regEx,(mTCH)=> `-${operatorMap[match]}-`)

    const options = ['price,rating']
    filters = filters.split(',').forEach((item)=>{
      const [field,operator,value]=item.spilt('-')
      if(options.include(field)){
        queryObject[field] = {[operator]:Number(value)}
      }
    })
  }

  let result  =  Product.find(queryObject)

  if(sort){
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  }
  if(fields){
    const fieldList = fields.split(',').join(' ')
      result = result.select(fieldList)
  }
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10 
  const skip = (page -1)* limit 

  result = result.limit(limit).skip(skip)



  const products = await result 
  res.status(200).json({products, nbHits:products.length})
}

module.exports ={
  getAllProductsStatic ,
  getAllProduct 
}