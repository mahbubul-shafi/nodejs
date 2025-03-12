const express = require('express');
const app = express();
const PORT = 3000;
const jwt = require('jsonwebtoken')
require('dotenv').config();

app.use(express.json())
const posts = [
    {
        name: "shafi",
        title: "post1"
    },
    {
        name: "farhan",
        title: "post2"
    }
]
const authenticate = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(404);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    });
}

app.get('/', authenticate, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accessToken})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
