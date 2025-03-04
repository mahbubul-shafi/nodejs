const express = require("express")
const app = express();
const bodyParser = require('body-parser')

//use query
app.get('/',(req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    const age = req.query.age;
    res.send(`id: ${id}, name: ${name}, age: ${age}`);
})

//use params
app.get('/id/:id/name/:name',(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    res.send(`id: ${id}, name: ${name}`);
})

//we can also get data from header

//getting json data using body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/bodyParser',(req, res)=> {
  const name = req.body.name;
  res.send(`name: ${name}`);
})

//getting body from a input form
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})

app.post('/register',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`name: ${name} & age: ${age}`)
})
module.exports = app