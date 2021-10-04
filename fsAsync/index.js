const fs = require("fs");
// fs.writeFile("read.txt", "today is awesome day", (err) => {
//   console.log("files is created");
// });
// fs.appendFile("read.txt","Trying hard to be happy",()=>{
//     console.log("task completed");
// })
fs.readFile("read.txt","utf8",(err,res)=>{
    console.log(res);
})