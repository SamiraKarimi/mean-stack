const {Author} = require('../models/author')

module.exports = {
    index: (req,res)=>{
        Author.find()
        .then(authors=>{
            console.log('****************');
            console.log(authors);
            res.json(authors);
        })
        .catch(err => res.json(err));
    },
    create: (req,res)=> {
        console.log('************************')
        console.log(req.body)
        const author = new Author();
        author.name = req.body.name;
        console.log(author);
        author.save()
              .then(newAuthor => {
                  console.log('new Author,',newAuthor)
                //   res.redirect('/');
                res.json(newAuthor);
              })
              .catch(err => {
                console.log('error saving user:',err)
                res.json(err)
            })
    },

        delete: (req,res)=> {
            Author.remove({_id:req.params.id})
            .then(
                author => res.json(athor)
            )
            .catch(err=> res.json(err))
        },
        edit: (req,res)=>{
            Author.findOne({_id: req.params.id})
                  .then(author=>{
                      res.json(author);
                  })
                  .catch(err=> res.json(err))
        },
        update: (req,res)=>{
            Author.findOne({_id:req.params.id})
            .then(author=> {
            author.name= req.body.name;
            author.save()
            .then(updatedAuthor =>res.json(updatedAuthor) )
            })
        }

}