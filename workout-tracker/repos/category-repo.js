
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

function findCategories(callback){
    categoryModel.Category.find({}, (err, res)=>{
        if(err) callback(err, null);
        // console.log(res);
        callback(null, res);
    })    
}

module.exports =  {insertCategory,findCategories}


    



