const http = require('http')
const fs = require('fs')
const log = require('log')

var config = fs.readFileSync('./config.json')
var configObj = JSON.parse(config)

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

server.listen(configObj.port, ()=> console.log("listening on port " + configObj.port))
