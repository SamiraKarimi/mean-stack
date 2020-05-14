const express = require("express");
app.use(express.static( __dirname + '/public/dist/public' ));
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
mongoose.connect('mongodb://localhost/mong', {useNewUrlParser: true});
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
// session
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,  
    cookie: { maxAge: 60000 }
  }))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');  

// Create a Schema for Users
const MongSchema = new mongoose.Schema({
    name: {type: String}
   }, {timestamps: true})
   // create a constructor function for our model and store in variable 'User'
const Mong = mongoose.model('Mong', MongSchema);
//router

  app.get('/', (req, res) => {  
    Mong.find()
        .then(mongs => res.render("index", {mongs: mongs}))
        .catch(err => res.json(err));
});
app.get('/mongoose/new',(req,res)=>{
    res.render('addmon')
})
app.post('/mongoos', (req, res) =>{
    console.log('*******************')
    console.log(req.body.mongoose);
    req.session.mangoose = req.body.mangoose;
     
    const mong = new Mong();
    mong.name = req.body.mongoose;
    mong.save()
      .then(newMong => console.log('Mongoose created: ', newMong))
      .catch(err => console.log(err)); 
    res.redirect('/');
  }) 
app.get('/mongoose/:id',(req,res)=>{
    Mong.find({_id:req.params.id})
    .then(mong=> res.render('monginfo',{mong:mong}))
    .catch(err=>res.json(err))
})
app.listen(8000, () => console.log("listening on port 8000"));