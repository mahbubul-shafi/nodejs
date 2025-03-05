const express = require("express");
const multer = require("multer");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;
app.use(express.urlencoded({extended: true}));

//connect with mongoDB
const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/testDB");
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
    console.log(error);
    process.exit(1);
  }
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
});

const User = new mongoose.model("Users", userSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
  },
});

const upload = multer({ storage: storage });
app.post("/", upload.single("image"), async (req, res) => {
  try{
    const newUser = new User({
      name: req.body.name,
      image: req.file.filename,
    })
    await newUser.save();
    res.send("cool");
  }catch(error){
    res.send(error.message);
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectDB();
});
