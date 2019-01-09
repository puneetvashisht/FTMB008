var express = require('express')
var app = express()
var bodyParser = require('body-parser')


// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', './views')
 
var courses = [
    {title: "Angular 6", summary: "Framework from google!!"},
    {title: "React", summary: "Library from facebook!!"},
]

app.get('/courses', (req, res)=> {
    res.json(courses)
})


app.get('/', (req, res)=> {
    res.render('index', {message: 'Test Message EJS', title: 'Test Title EJS'})
})

app.get('/courseshtml', (req, res)=> {
    res.render('courses', {courses})
})

app.post('/courses', (req, res)=>{
    var course = req.body;
    console.log(course);
    courses.push(course);
    res.status(201).json(courses);
})

app.delete('/courses/:index', (req, res)=>{
    console.log(req.params.index);
    var index = req.params.index
    if(index<courses.length){
        courses.splice(index, 1);
        res.status(202).json(courses);
    }
    else{
        res.status(204).json({message: "Course object not found"})
    }
   


    
})
 
app.listen(3000)