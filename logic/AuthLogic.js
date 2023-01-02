const AUTH=require('../model/AuthModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// Authentication (Sign Up Operation)

module.exports={
    // store user info in the DB
    signup : async(req,res) => {
        const user= await AUTH.find({email : req.body.email});

        if(user.length>=1){
           return res.json({message: "This email is already exists"});
          }else {
              bcrypt.hash(req.body.password,10,async(error,hash) => {
                  if(error){
                      return res.json({message : "Error in password"});
                  }else{
                      const auth= new AUTH({
                          name     : req.body.name,
                          email    : req.body.email,
                          password : hash
                      }).save();
                        res.json({
                          message : "Create user successfully",
                          email :  req.body.email,
                          password: hash
                        });
                  }
              } )
          }
},

// Authentication For user (Login)

login : async(req,res) =>{
    // check if email and pass equal email and pass in DB
    const user= await AUTH.find({email: req.body.email});
    if(user.length<1){
        return res.json({message : "This is not exist"});
    }else{
        bcrypt.compare(req.body.password, user[0].password, async(error,result) =>{
        if(error){
            return res.json({message : "Password not exist"});
        }else{
            //Create JWT with secret key and send it back to the client
            const token= jwt.sign({email:user[0].email , name: user[0].name} , "USER");
            return res.json({
                message : "User logged in",
                email : user[0].email,
                token: token
            });
        }

    })
    }
}



}



