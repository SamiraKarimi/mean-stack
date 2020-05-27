// const express = require("express");
// const app = express();
// app.get('/', (request, response) => {
//    response.send("Hello Express");
// });
const express = require("express")
const mongoose = require('mongoose');

const app = express();
// Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/authors-with-angular',{ useNewUrlParser: true });

//setting

app.use(express.static(__dirname+'/public/dist/public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app)
app.listen(8000, () => console.log("listening on port 8000"));
