const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const dataFile = path.join(__dirname, '..', 'data', 'courses.json');

// Helper to read courses
function readCourses() {
  if (!fs.existsSync(dataFile)) return [];
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);
}

// Helper to write courses
function writeCourses(courses) {
  fs.writeFileSync(dataFile, JSON.stringify(courses, null, 2));
}

// View all courses
router.get('/view_courses', (req, res) => {
  const courses = readCourses();

let courseListHTML = `
  <table class="course-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Course Name</th>
        <th>Course Code</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      ${courses.map((c, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${c.name}</td>
          <td>${c.code}</td>
          <td>
            <a class="edit-btn" href="/course/edit_course/${i}">Edit</a>
            <a class="delete-btn" href="/course/delete_course/${i}">Delete</a>
          </td>
        </tr>
      `).join('')}
    </tbody>
  </table>
`;


  const pageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enrolled Courses</title>
  <link rel="stylesheet" href="/main.css" />
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/admin/add_course">Add Course</a></li>
        <li><a href="/course/view_courses">View Courses</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Enrolled Courses</h1>
    <ul>
      ${courseListHTML || '<li>No courses enrolled yet.</li>'}
    </ul>
  </main>
</body>
</html>`;

  res.send(pageHTML);
});

// Delete a course
router.get('/delete_course/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const courses = readCourses();

  if (!isNaN(index) && index >= 0 && index < courses.length) {
    courses.splice(index, 1);
    writeCourses(courses);
  }

  res.redirect('/course/view_courses');
});

// Show edit form
router.get('/edit_course/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const courses = readCourses();

  if (isNaN(index) || index < 0 || index >= courses.length) {
    return res.redirect('/course/view_courses');
  }

  const course = courses[index];

  const formHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Edit Course</title>
  <link rel="stylesheet" href="/main.css" />
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/admin/add_course">Add Course</a></li>
        <li><a href="/course/view_courses">View Courses</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Edit Course</h1>
    <form action="/course/edit_course/${index}" method="POST">
      <label for="courseName">Course Name:</label>
      <input type="text" id="courseName" name="courseName" value="${course.name}" required />

      <label for="courseCode">Course Code:</label>
      <input type="text" id="courseCode" name="courseCode" value="${course.code}" required />

      <button type="submit">Update Course</button>
    </form>
  </main>
</body>
</html>
`;

  res.send(formHTML);
});

// Handle edit form submission
router.post('/edit_course/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const courses = readCourses();

  if (!isNaN(index) && index >= 0 && index < courses.length) {
    courses[index] = {
      name: req.body.courseName,
      code: req.body.courseCode
    };
    writeCourses(courses);
  }

  res.redirect('/course/view_courses');
});

module.exports = router;
