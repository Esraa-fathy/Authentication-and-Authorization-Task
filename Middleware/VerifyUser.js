const jwt=require('jsonwebtoken');

// Authorization for User
 module.exports= async(req, res, next)=>{
try{
// this is JWT , but split(" ")[0] is the keyword ( Bearer)
const token= req.headers.authorization.split(" ")[1];
// Verify JWT by using secret key
const decode=jwt.verify(token,"USER");
// req.userData=decode;
return res.json({message : "I will handle Authorization after we sit data!!!"});
next();
}catch{
    return res.json({message : "Authorization for user is error"});
}
 }