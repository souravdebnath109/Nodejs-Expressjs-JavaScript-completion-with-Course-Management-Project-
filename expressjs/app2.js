const express = require('express');
const app2 = express();

// First middleware
app2.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

// Second middleware
app2.use((req, res, next) => {
  console.log('Middleware 2');
  res.send('Hello from Express!');
});

app2.listen(3000, () => {
  console.log('Express server is running on http://localhost:3000');
});
