const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('Request received');});
    server.listen(3000);
