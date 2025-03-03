const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: new request recieved\n`
    fs.appendFile("file.txt",log, (err, data)=>{
        switch (req.url){
            case '/': res.end("this is home"); break;
            case '/about': res.end("this is about"); break;
            default: res.end("404 not found");
        }
    })
})

myServer.listen(8000, ()=> console.log("server has started on http://localhost:8000"));