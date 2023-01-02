const express=require('express');
const db=require('./db');
const app= express();
const bodyparser=require('body-parser');
const AuthRouter=require('./Route/AuthRoute');
const UserCheck=require('./Middleware/VerifyUser');
app.get('/', (req,res)=>{
    res.send('Authenticaion And Authorization Task')
})
app.use([bodyparser.urlencoded({extended: false}),express.json(), express.urlencoded({extended: true})]);

app.use('/auth',AuthRouter);
app.use('/check',UserCheck);
const port=4000;
app.listen(port, () => {
console.log('Listening on port ' + port)
})

//ZPjTdg5rCYFZmpZD