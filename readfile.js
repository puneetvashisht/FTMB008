var fs = require('fs')


console.log('starting to read...')

// var contents = fs.readFileSync('./files/node.txt');
// console.log(contents + '');

fs.readFile('./files/node.txt', (err, contents)=>{
    if(err) throw err;
    console.log(contents + '')
})

console.log('finished reading...')