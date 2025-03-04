const fs = require("fs")

// fs.writeFile("./name.txt","shafi", (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

fs.writeFileSync("./name.txt","tafi");

// const result = fs.readFileSync("./name.txt","utf-8");
// console.log(result)

fs.readFile("./name.txt","utf-8",(err,data)=>{
    if(err){
        console.log("failed")
    }
    else{
        console.log(data);
    }
})