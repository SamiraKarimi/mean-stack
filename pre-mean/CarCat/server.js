const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
   res.send("Hello Express");
});
app.get('/cars.html', (req, res) => {
    res.send("cars.html");
 });
 app.get('/cats.html',(req,res)=>{
     res.send('cats.html');
 })
 app.get('/form.html',(req,res)=>{
     res.send('form.html');
 })
app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(8000, () => console.log("listening on port 8000"));