
const mongoose = require('mongoose');
const models = require('../models/category')
 
mongoose.connect('mongodb://localhost/workout');


function insertWorkout(workout){
    const workoutObj = new models.Workout(workout);
    workoutObj.save()
    .then(() =>{
        models.Category.save();
        console.log('Insert course successful!!');
    });
}

function findWorkouts(callback){
    models.Workout.find({}, (err, res)=>{
        if(err) callback(err, null);
        // console.log(res);
        callback(null, res);
    })

}


function startWorkout(workoutActive){
    workoutActive.startDate = new Date();
    workoutActive.startTime = new Date();
    const workoutObj = new models.WorkoutActive(workoutActive);
    workoutObj.save()
    .then(() =>{
        console.log('Insert workout active successful!!');
    });
}

function endWorkout(workoutActive){
    workoutActive.endDate = new Date();
    workoutActive.endTime = new Date();
    workoutActive.status = false;

    models.WorkoutActive.findOneAndUpdate({workoutId: workoutActive.workoutId}, workoutActive, (err, docs)=>{
        if(err) throw err;
        console.log('End workout active successful!!');
    })
}


function deleteCategory(id, callback){

    models.Category.findOneAndRemove({ _id: id }) 
    .exec(function(err, item) {
        if (err) {
            callback(true, {msg: 'Cannot remove item'} )
        }       
        if (!item) {
            callback(true,  {msg: 'User not found'})
        }  
        callback(false, {msg: 'Category deleted.'});
    });
}

module.exports =  {insertWorkout, findWorkouts, startWorkout, endWorkout}


    



