// server7.js

const http = require("http");

// Import the handler function from server_content.js
const serverContent = require("./servercontent");

// Create the server and pass the handler
const server = http.createServer(serverContent);

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
