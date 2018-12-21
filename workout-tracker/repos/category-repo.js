
const mongoose = require('mongoose');
const categoryModel = require('../models/category')
 
mongoose.connect('mongodb://localhost/workout');


function insertCategory(category){
    const categoryObj = new categoryModel.Category(category);
    categoryObj.save()
    .then(() =>{
        console.log('Insert course successful!!');
    });
}

// function findCategory(id,callback){
//     categoryModel.Category.find({_id, id}, (err, res)=>{
//         if(err) callback(err, false);
//         // console.log(res);
//         callback(null, true);
//     })    
// }

function findCategories(callback){
    categoryModel.Category.find({}, (err, res)=>{
        if(err) callback(err, null);
        // console.log(res);
        callback(null, res);
    })    
}


function deleteCategory(id, callback){

    categoryModel.Category.findOneAndRemove({ _id: id }) 
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

module.exports =  {insertCategory,findCategories, deleteCategory}


    



