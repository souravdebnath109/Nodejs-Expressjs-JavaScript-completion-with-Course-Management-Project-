//mainly aikhane server er response dekhano hoise jokhon keo form (input) fill kore then oitar response ta  server  or nodejs niye then server er akta file ("file form server6 .txt")  e store kore 


// Import the http module to create a server
const http = require("http");

// Import the fs module to handle file system operations
const fs = require("fs");

// Create the server
const server = http.createServer((req, res) => {
  // Get the requested URL
  const url = req.url;

  // Get the HTTP method (GET, POST, etc.)
  const method = req.method;

  // Handle root path "/"
  if (url === "/") {
    // Set response header to HTML
    res.setHeader("Content-Type", "text/html");

    // Write the HTML response
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write("<h1>Hello from my Node.js Server!</h1>");
    // Add a simple form to submit text
    res.write('<form action="/file" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write("</body>");
    res.write("</html>");

    // End the response
    return res.end();
  }

  // Handle POST request to "/file"
  if (url === "/file" && method === "POST") {
    const body = [];

    // Listen for data chunks
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // Listen for end of data
    return req.on("end", () => {
      // Combine chunks and convert to string
      const parsedBody = Buffer.concat(body).toString();

      // Extract the message value from form data
      const message = parsedBody.split("=")[1];

      // Write the message to a file synchronously
      fs.writeFileSync("file_from_server6.txt", message);

      // Log success message
      console.log("File created successfully.");

      // Redirect the user back to "/"
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }

  // Handle other routes (default response)
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Second Page</title></head>");
  res.write("<body><h1>This is the Second Page!</h1></body>");
  res.write("</html>");
  res.end();
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
