
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

module.exports =  {insertWorkout, findWorkouts}


    


