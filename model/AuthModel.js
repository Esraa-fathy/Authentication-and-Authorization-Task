const mongoose=require('mongoose');
// create model of user info
const auth=mongoose.Schema({
 name:String,
 email:String,
 password:String   
});

module.exports=mongoose.model('AUTH',auth);

