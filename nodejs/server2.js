const http=require("http");
const server=http.createServer((req,res)=>{
console.log("URL", req.url,
            "Method", req.method,
            "Headers", req.headers);

});
server.listen(3000);