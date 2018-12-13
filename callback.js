// -- Callbacks -- 

// function printMe(fn) {
//     console.log(fn)
//     fn("success")
// }

// printMe(function (result) {
//     console.log('foo');
//     console.log(result)
// })


// -- Promises -- 
function printMe() {
    return new Promise((resolve, reject)=> {
        resolve("success")
    }) 
}

printMe()
.then((res)=>console.log(res))

