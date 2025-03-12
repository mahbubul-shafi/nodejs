const express = require('express')
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json())

const users = [
    {
        name: "shafi"
    }
]

app.get('/users',(req,res)=>{
    res.json(users);
})

app.post('/users', async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const user = {name: req.body.name, password: hashPassword};
        users.push(user);
        console.log("ok")
        res.status(201).send();

    }catch(error){
        console.log("not ok")
        res.status(500).send();
    }
})

app.post('/users/login', async (req,res)=>{
    const user = await users.find(user => user.name === req.body.name);
    if(!user){
        return res.status(400).send('cannot find user')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send('success')
        }else{
            res.send('wrong password')
        }
    }catch{
        console.log("not ok")
        res.status(500).send();
    }
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})