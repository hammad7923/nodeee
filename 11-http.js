const http=require('http');

const server= http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end("welcome");
   }
   if(req.url === '/about'){
    res.end("oops some thing went wrong");
   }
    res.end(`<h1>try again later</h1><a href="/">back home</a>`);
})

server.listen(5000);