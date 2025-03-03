const http = require("http")
const url = require("url")

const myServer = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    switch (myUrl.pathname){
        case '/': res.end("this is home"); break;
        case '/about': 
        const name = myUrl.query.name;
        res.end(`this is about ${name}`); 
        break;
        default: res.end("404 not found");
    }
})

myServer.listen(8000, ()=> console.log("server has started on http://localhost:8000"));