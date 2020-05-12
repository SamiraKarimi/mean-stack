const express = require("express");
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/User', {useNewUrlParser: true});
app.use(express.urlencoded({extended: true}));
// PUT SESSION OBJECT HERE
// const session = require('express-session');
// app.use(session({
//   secret: 'keyboardkitteh',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// Create a Schema for Users
const UserSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
   }, {timestamps: true})
   // create a constructor function for our model and store in variable 'User'
const User = mongoose.model('User', UserSchema);
//router
app.post('/users', (req, res) =>{
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
      .then(newUserData => console.log('user created: ', newUserData))
      .catch(err => console.log(err));
     
    res.redirect('/');
  })
  app.get('/', (req, res) => {  
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});



app.listen(8000, () => console.log("listening on port 8000"));