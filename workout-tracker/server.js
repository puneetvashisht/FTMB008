var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var categoryRepo = require('./repos/category-repo')


// parse application/json
app.use(bodyParser.json())


app.get('/categories', (req, res)=> {
    categoryRepo.findCategories((err, categories)=>{
        if(err) throw err;
        res.json(categories)
    })
    
})

app.post('/categories', (req, res)=>{
    var category = req.body;
    console.log(category);
    categoryRepo.insertCategory(category) 
    res.status(201).json({message: "Category successfully inserted"});
})

app.delete('/categories/:id', (req, res)=>{
    console.log(req.params.id);
    var index = req.params.id
    if(index<courses.length){
        courses.splice(index, 1);
        res.status(202).json(courses);
    }
    else{
        res.status(204).json({message: "Course object not found"})
    }
   


    
})
 
app.listen(3000, ()=>console.log('listening on 3000'))