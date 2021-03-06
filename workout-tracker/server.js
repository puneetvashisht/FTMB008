var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var categoryRepo = require('./repos/category-repo')
var workoutRepo = require('./repos/workout-repo')


// parse application/json
app.use(bodyParser.json())

app.use(cors())

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
    var id = req.params.id

    categoryRepo.deleteCategory(id, (err, data)=>{
        if(err) {
            res.status(204).json(data);
        }
        else{
            res.status(202).json(data);
        }
       
    }) 
})


app.post('/workout', (req, res)=>{
    var workout = req.body;
    console.log(workout);
    workoutRepo.insertWorkout(workout) 
    res.status(201).json({message: "Workout successfully inserted"});
})



app.post('/workout/start', (req, res)=>{
    var workoutActive = req.body;
    console.log(workoutActive);
    workoutRepo.startWorkout(workoutActive) 
    res.status(201).json({message: "Workout successfully started"});
})
app.post('/workout/end', (req, res)=>{
    var workoutActive = req.body;
    console.log(workoutActive);
    workoutRepo.endWorkout(workoutActive) 
    res.status(201).json({message: "Workout successfully ended"});
})

app.get('/workout', (req, res)=> {
    workoutRepo.findWorkouts((err, workouts)=>{
        if(err) throw err;
        res.json(workouts)
    })
    
})
 
app.listen(3000, ()=>console.log('listening on 3000'))