// server8.js

const http = require("http");

// Import the object from servercontent8.js
const serverContent8 = require("./servercontent8");

// Access the handler function from the imported object
const server = http.createServer(serverContent8.handler);

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000/");
  console.log("ℹ️ Extra info from module:", serverContent8.info);
});
