const http = require('http')
const fs = require('fs')
const log = require('log')

var server = http.createServer((req, res)=> {
    console.log(req.url)  
    log.debug("Request Url is:  %s", req.url);
    if(req.url === '/courses'){
        var course = {courseName: 'Angular'}
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(course))
    }
    else{
        fs.readFile('./files'+ req.url, (err, data)=>{
            if(err) {
                res.statusCode = 404;
                res.end('Not Found!!')
            }
            console.log('File contents: ' + data)
            res.end(''+ data)
        })
    }
})

server.listen(3001, ()=> console.log("listening on port 3001"))
