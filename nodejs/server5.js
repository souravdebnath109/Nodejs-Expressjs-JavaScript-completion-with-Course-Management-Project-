const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
        res.write("</html>");
        res.end();
    } else if (path === "/file") {
        fs.writeFileSync("file.txt", "This is a file created by Node.js server.");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My Second Page</title></head>");
        res.write("<body><h1>This is the Second Page!</h1></body>");
        res.write("</html>");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});
