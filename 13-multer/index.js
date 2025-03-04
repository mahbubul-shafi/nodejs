const express = require("express");
const multer = require("multer");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
app.post('/', upload.single('image'),(req,res)=>{
    res.send("cool");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
