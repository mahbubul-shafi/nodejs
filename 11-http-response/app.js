const express = require("express")
const app = express()

app.use('/register',(req,res)=>{
    // res.json({
    //     "name":"shafi",
    //     "statuscode":300
    // });
    // res.redirect('/login');
    res.sendFile(__dirname+"/views/register.html")
})
app.use('/login',(req,res)=>{
    res.cookie("name","shafi");
    res.cookie("age","29");
    res.clearCookie("age");
    res.end();
})

module.exports = app;