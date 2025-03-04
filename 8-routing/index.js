const http = require("http")
const port = 4000
const fs = require("fs")


const myServer = http.createServer((req,res)=>{

    const handlereq = (filename,statuscode)=>{
        fs.readFile(filename, (err,data)=>{
            res.writeHead(statuscode, {'Content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }

    if(req.url=='/'){
        handlereq('./views/home.html',200);
    }
    else if(req.url=='/about'){
        handlereq('./views/about.html',200)
    }else{
        handlereq('./views/error.html',404);
    }
})

myServer.listen(port,()=>{
    console.log(`server is running @ http://localhost:${port}`);
})