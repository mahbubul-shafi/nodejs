// const http = require("http")
// const fs = require("fs")

// const myServer = http.createServer((req,res)=>{
//     const log = `${Date.now()}: new request recieved\n`
//     fs.appendFile("file.txt",log, (err, data)=>{
//         switch (req.url){
//             case '/': res.end("this is home"); break;
//             case '/about': res.end("this is about"); break;
//             default: res.end("404 not found");
//         }
//     })
// })
// myServer.listen(8000, ()=> console.log("server has started on http://localhost:8000"));

const http = require("http")
const port = 4000
const myServer = http.createServer((req,res)=>{
    res.writeHead(202, { 'Content-Type': 'text/html' });
    res.write('<h1>hello</h1>')
    res.end();
})
myServer.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})