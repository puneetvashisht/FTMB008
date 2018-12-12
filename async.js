function synch(){
    console.log('Do some stuff')
    return "success"
}

function asynch(callback){
    setTimeout(()=>{
        console.log('Do some stuff')
        callback("success") 
    },0)
}


console.log('starting to execute...')

// var result = synch()
// console.log(result)
asynch((result)=>console.log(result))


console.log('finished executing...')