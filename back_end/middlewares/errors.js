const ErrorHandler = require('../utils/errorHandler');

module.exports = (err,req,res,next)=>{
    const env = process.env.NODE_ENV.trim()
    err.statusCode = err.statusCode || 500;

   if(env === "DEVELOPMENT"){
    res.status(err.statusCode).json({
        success:false,
        error:err,
        errMessage:err.message,
        stack:err.stack
    })
   }

   if (env === "PRODUCTION"){
       let error = {...err}
       error.message  = err.message
    res.status(error.statusCode).json({
        success:false,
        message: error.message || 'Internal Server Error'
    }) 
   }
   
}