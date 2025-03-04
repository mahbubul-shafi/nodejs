const express = require("express")
const router = express.Router();

router.get('/login',(req,res)=>{
    res.send("this is login")
})
router.get('/register',(req,res)=>{
    res.send('this is register');
})

module.exports = router;