const {Task} = require('../models/task')

 module.exports = {
    index: (req,res)=>{
        Task.find()
        .then(tasks=> {
            console.log('$$$$$$$$$$$$$$$$$$$$$$$$$')
            console.log(tasks)
            res.json(tasks);
        })
        .catch(err=>res.json(err))  
    }, 

    new: (req,res)=>{
        // res.render('new');
    },
    update: (req,res)=>{
        Task.findOne({_id:req.params.id})
        .then(task=> {
        task.title= req.body.title;
        task.description= req.body.description;
        task.completed= req.body.complete;
        task.save()
        .then(updatedTask =>res.json(updatedTask) )
        })
    },
    create: (req,res)=>{
        console.log('***************')
        console.log(req.body)
        const task = new Task();
        task.title= req.body.title;
        task.description= req.body.description;
        task.completed= req.body.complete;
        task.save()
        .then(newTask => {
            console.log('we created,',newTask)
            res.redirect('/');
        })
        .catch(err => {
            console.log('error saving user:',err)
            // res.render('index')
            res.json(err)
        })
    },
    taskById: (req,res)=>{
        console.log(req.params);
    Task.find({_id:req.params.id})
        .then(task=> {
            console.log('*******')
            //we can use findOne and it  will give us just an object inside the array and it doesnt need to pull out the obj from array any more
            console.log(task[0]);
            let theTask = task[0];
            res.json(theTask);
        })
        .catch(err=>res.json(err))
    },
    edit: (req,res)=>{
        console.log(req.params);
        Task.findOne({_id:req.params.id})
            .then(task=> { 
                // res.render('edit',{task})
                res.json(task);
            })
            .catch(err=>res.json(err)) 
    },
    delete: (req,res)=>{
        Task.remove({_id:req.params.id})
        .then(
            // ()=>res.redirect('/')
            task => res.json(task)
            )
        .catch(err=>res.json(err))
        
    }

}