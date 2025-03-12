require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbURL = process.env.MONGO_URL;
const User = require('./models/users.model')

// Initialize the app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(dbURL)
  .then(() => console.log("db is connected!"))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

// Define a port
const PORT = process.env.PORT || 3000;

// Create a basic route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

app.post("/register", async (req, res) => {
  try{
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser)
  }catch(error){
    res.status(500).json(error)
  }
});
app.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(user && user.password === password){
            res.status(200).json({status: 'valid user'})
        }else{
            console.log('user not found');
            res.end();
        }
      }catch(error){
        res.status(500).json(error)
      }
});

// 404 Middleware for handling unmatched routes
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
