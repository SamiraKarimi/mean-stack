const express = require("express");
const ejs = require('ejs');
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
app.get('/firstKitty',(req,res)=>{
    context={
        favorite_food:'Spagetti',
        age:3,
        sleeping_spots:['under the bed','in a sunbeam'] 
    }
    res.render('firstKitty',context);
})
app.get('/secKitty',(req,res)=>{
    context={
        favorite_food:'meatball',
        age:4,
        sleeping_spots: ['under the bed','in the leaving room', 'in the couch']
    
    }
    res.render('secKitty',context);
})
app.get('/thirdKitty',(req,res)=>{
    context={
        favorite_food:'chicken',
        age:5,
        sleeping_spots:['under the bed','in the leaving room', 'in the couch']
    }
    res.render('thirdKitty',context);
})

app.listen(8000, () => console.log("listening on port 8000"));