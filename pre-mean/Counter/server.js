const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//routs here
app.get('/', (req, res) => {
    console.log(req.session)
    if(!(req.session.counter))
    req.session.counter=1;
     else req.session.counter ++;
     context = {
         counter:req.session.counter
     }
    res.render('success.ejs',context)
});

app.get('/generate', (req, res) => {
    req.session.counter ++;
res.redirect('/')
});

app.get('/reset',(req,res)=> {
    req.session.counter=0;
res.redirect ('/')
})





app.listen(8000, () => console.log("listening on port 8000"));