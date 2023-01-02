const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Esraa:ZPjTdg5rCYFZmpZD@signup.eiwlpgi.mongodb.net/regestration?retryWrites=true&w=majority')
.then(() => {
console.log('Connected to DB')
})
.catch(() => {
    console.log('Unable to Connected to DB') 
})