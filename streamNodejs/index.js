const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
//   fs.readFile("readFile.txt", (err, data) => {
//     if (err) console.log(err);
//     res.end(data);
//   });
    const rstream=fs.createReadStream("readFile.txt");
    // rstream.on("data",(chunk)=>{
    //     res.write(chunk);
    // })

    // rstream.on("end",()=>{
    //     res.end();
    // })

    // rstream.on("error",(err)=>{
    //     console.log(err);
    // })
    rstream.pipe(res);

});

server.listen(8000, "127.0.0.1");
