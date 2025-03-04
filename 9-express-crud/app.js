const express = require("express");
const app = express();

app.get('/',(req, res)=>{
    res.send('I am a get request')
})
app.post('/',(req, res)=>{
    res.send('I am a post request')
})
app.put('/',(req, res)=>{
    res.send('I am a put request')
})
app.delete('/',(req, res)=>{
    res.send('I am a delete request')
})

module.exports = app;