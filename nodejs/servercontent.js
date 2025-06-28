// server_content.js

const fs = require("fs");

// Export a request handler function
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write("<h1>Hello from my Node.js Server!</h1>");
    res.write('<form action="/file" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/file" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("file_from_server7.txt", message);
      console.log("File created successfully.");

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  // For all other routes
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Second Page</title></head>");
  res.write("<body><h1>This is the Second Page!</h1></body>");
  res.write("</html>");
  res.end();
};

// Export the handler function
module.exports = requestHandler;
