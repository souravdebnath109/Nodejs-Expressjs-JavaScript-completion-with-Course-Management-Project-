// servercontent8.js

const fs = require("fs");

// Define the request handler function
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // Handle root path "/"
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

  // Handle form submission POST to "/file"
  if (url === "/file" && method === "POST") {
    const body = [];

    // Collect data chunks
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // When data is fully received
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      // Write the message to a file
      fs.writeFileSync("file_from_server8.txt", message);
      console.log("File created successfully with content:", message);

      // Redirect back to home page
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });

    return;
  }

  // Default response for other routes
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Not Found</title></head>");
  res.write("<body><h1>404 - Page Not Found</h1></body>");
  res.write("</html>");
  res.end();
};

// Export as an object with the handler and extra info
module.exports = {
  handler: requestHandler,
  info: "This module handles routing and file saving for the Node.js server."
};
