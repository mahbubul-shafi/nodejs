const PORT = 3000;
const app = require('./app')

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})