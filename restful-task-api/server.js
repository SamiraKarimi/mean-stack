const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require("express"); 
const path = require('path');
const port = process.env.PORT || 8000;
// const {env:{PORT:port=8000}}=process
const {Schema}= mongoose
const app = express();
mongoose.connect('mongodb://localhost/restful-task-api',{ useNewUrlParser: true });
mongoose.connection.on('connected',()=>console.log('connected to mongodb'));

const TaskSchema = new Schema({
   title:{  
       type:String,
       required: [true,'title is required'],
       minlength:[2,'taks must be longer than 2'],
       trim:true
   },
   description:{
       type:String,
       trim: true,
   },
   completed: {
       type:Boolean,
       default: false,
   },
created_at: {
    type: Date,
    default: Date.now
},
updated_at: {
    type:Date,
    default:Date.now
}

});
const Task = mongoose.model('Task',TaskSchema);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    Task.find()
    .then(tasks=> {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$')
        console.log(tasks)
        res.render('index',{tasks})
    })
    .catch(err=>res.json(err))    
})
app.get('/tasks/new',(req,res)=>{
    res.render('new');
})
app.post('/tasks/:id',(req,res)=>{
    Task.findOne({_id:req.params.id})
    .then(task=> {
    task.title= req.body.title;
    task.description= req.body.description;
    task.completed= req.body.complete;
    task.created_at= req.body.created_at;
    task.updated_at= req.body.updated_at;
    task.save()
    .then(updatedTask =>res.redirect('/task/'+updatedTask._id) )
    })
})
app.post('/tasks',(req,res)=>{
    console.log('***************')
    console.log(req.body)
    const task = new Task();
    task.title= req.body.title;
    task.description= req.body.description;
    task.completed= req.body.complete;
    task.created_at= req.body.created_at;
    task.updated_at= req.body.updated_at;
    task.save()
    .then(newTask => {
        console.log('we created,',newTask)
        res.redirect('/');
    })
    .catch(err => {
        console.log('error saving user:',err)
        res.render('index')
    })
})
app.get('/task/:id',(req,res)=>{
console.log(req.params);
Task.find({_id:req.params.id})
    .then(task=> {
        console.log('*******')
        //we can use findOne and it  will give us just an object inside the array and it doesnt need to pull out the obj from array any more
        console.log(task[0]);
        let theTask = task[0];
        res.render('task',{theTask});
    })
    .catch(err=>res.json(err))
})
app.get('/task/:id/edit',(req,res)=>{
    console.log(req.params);
    Task.findOne({_id:req.params.id})
        .then(task=> { 
           res.render('edit',{task})
        })
        .catch(err=>res.json(err))  
    })

app.get('/task/:id/destroy',(req,res)=>{
    Task.remove({_id:req.params.id})
    .then(()=>res.redirect('/'))
    .catch(err=>res.json(err))
})

app.listen(port, ()=>console.log(`express serverlistening on port ${port}`));
  