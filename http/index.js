const http=require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/Home'){
        res.end("Home");
    }else if(req.url=='/About'){
        res.end("/About");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error page not found</h1>")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8000");
})