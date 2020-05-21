const tasks = require('../controllers/tasks')
module.exports = function(app){

    app.get('/tasks',(req,res)=>{
        tasks.index(req,res) 
    }) 
    app.get('/tasks/new',(req,res)=>{
        tasks.new(req,res)
    })
    app.post('/tasks/:id',(req,res)=>{
       tasks.update(req,res)
    })
    app.post('/tasks',(req,res)=>{
        tasks.create(req,res)
    })
    app.get('/task/:id',(req,res)=>{
        tasks.taskById(req,res)
    })
    app.get('/task/:id/edit',(req,res)=>{
       tasks.edit(req,res) 
        })
    
    app.get('/task/:id/destroy',(req,res)=>{
       tasks.delete(req,res)
    })
}