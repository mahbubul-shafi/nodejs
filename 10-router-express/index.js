PORT = 3000
const app = require("./app")

app.listen(PORT,()=>{
    console.log(`server is running @ http://localhost:${PORT}`);
})