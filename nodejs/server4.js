const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Node.js Server</title></head>");

    if (url === "/") {
        // First page for root URL
        res.write("<body><h1>Hello from my Node.js Server! (First Page)</h1></body>");
    } else {
        // Second page for any other URL
        res.write("<body><h1>This is the Second Page!</h1></body>");
    }

    res.write("</html>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});
