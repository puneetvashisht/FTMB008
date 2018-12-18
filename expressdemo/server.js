var express = require('express')
var app = express()
var bodyParser = require('body-parser')


// parse application/json
app.use(bodyParser.json())
 
var courses = [
    {title: "Angular 6", summary: "Framework from google!!"},
    {title: "React", summary: "Library from facebook!!"},
]

app.get('/courses', (req, res)=> {
    res.json(courses)
})

app.post('/courses', (req, res)=>{
    var course = req.body;
    console.log(course);
    courses.push(course);
    res.status(201).json(courses);
})

app.delete('/courses/:index', (req, res)=>{
    console.log(req.params.index);
    courses.splice(req.params.index, 1);
    res.status(202).json(courses);
})
 
app.listen(3000)