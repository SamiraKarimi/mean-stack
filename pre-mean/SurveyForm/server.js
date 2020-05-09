const express = require("express");
const app = express();
const session = require('express-session');
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('survey')
});
app.post('/survey',(req,res)=>{
    req.session.name=req.body.name;
    req.session.location=req.body.location;
    req.session.language=req.body.language;
    req.session.comments = req.body.comments;
    console.log(req.session.name);
    console.log(req.session)
    res.redirect('submit')
})
app.get('/submit',(req,res)=>{
    context = {
        name : req.session.name,
        location: req.session.location,
        language: req.session.language,
        comments: req.session.comments
    }
    res.render('submit.ejs',context)
})

app.listen(8000, () => console.log("listening on port 8000"));