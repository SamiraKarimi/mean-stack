const express = require("express")
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/restful-task-api',{ useNewUrlParser: true });

//setting

app.use(express.static(__dirname+'/public/dist/public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app)
app.listen(8000, () => console.log("listening on port 8000"));
