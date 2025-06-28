// const http=require('http');
// const express=require('express');
// const app=express();
// app.use(express.urlencoded({extended:false})); // Middleware to parse URL-encoded bodies
// app.get ("/abc", (req, res, next) => {
//   console.log("Middleware for /abc");
//     res.send('<form action="/abc" method="post"><input type="text" name="name"><button type="submit">add course</button></form>');
//     app.post("/course",(req,res,next)=>{
//         console.log(req.body);
//         console.log("middleware 2");
//         res.redirect("/");
//     })


// }   );
// app.get("/",(req,res,next)=>{
//     console.log("middleware 1");
//     res.send("Hello from middleware 1");

// });
// app.listen(3000);








//updated code 




const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Home page
app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");
});

// Form page
app.get("/abc", (req, res) => {
  res.send(`
    <form action="/course" method="post">
      <input type="text" name="title" placeholder="Enter course title">
      <button type="submit">Add Course</button>
    </form>
  `);
});

// Handle form submission
app.post("/course", (req, res) => {
  const courseTitle = req.body.title;
  console.log("Received course title:", courseTitle);

  // Save to a file
  fs.appendFile('courses.txt', courseTitle + '\n', (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.send("Failed to save course.");
    }

    console.log("Course saved to file.");
    res.redirect("/");
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
