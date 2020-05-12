const express = require("express");
const mongoose = require('mongoose');
const app = express();  
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/User', {useNewUrlParser: true});
app.use(express.urlencoded({extended: true}));
//models
const UserSchema = new mongoose.Schema({
   name:{
       type:String
   },
   quote:{
        type:String
   },
   created_at:{
       type:Date,
       default:Date.now
   }
   })
//create an object fot mongoose
const User = mongoose.model('User', UserSchema);

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//routes
app.get('/', (req, res) => {
    res.render('welcome.ejs')
});
app.post('/quotes',(req,res)=>{
    const user = new User();
    user.name=req.body.name;
    user.quote = req.body.quote;
    user.save()
    .then(newUser =>{console.log("new User:",newUser)})
    .catch(err=>console.log('Error saving user:',err))
    res.redirect('/submit')
})
app.get('/submit',(req,res)=> {
    User.find()
    .then(users=> res.render('submit',{users:users}))
    .catch(err=>res.json(err));
});

app.listen(8000, () => console.log("listening on port 8000"));