const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
   res.send("Hello Express");
});
app.get('/car', (req, res) => {
    res.render("car");
 });
 app.get('/cat',(req,res)=>{
     res.render('cat');
 })
 app.get('/form',(req,res)=>{
     res.render('form');
 })
app.get('/home',(req,res)=>{
    res.render('home');
})

app.listen(8000, () => console.log("listening on port 8000"));