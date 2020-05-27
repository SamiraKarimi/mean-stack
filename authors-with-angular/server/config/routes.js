const authors = require('../controllers/authors')
module.exports = function(app){
    app.get('/all',(req,res)=>{
        authors.index(req,res)
    })
    app.post('/author',(req,res)=>{
        authors.create(req,res)
    })
    app.get('/author/:id/destroy',(req,res)=>{
        authors.delete(req,res)
    })
    app.get('/author/:id/edit',(req,res)=>{
        authors.edit(req,res)
    })
    //i add this part
    app.put('/author/:id',(req,res)=>{
        authors.update(req,res)
    })
    
    
}