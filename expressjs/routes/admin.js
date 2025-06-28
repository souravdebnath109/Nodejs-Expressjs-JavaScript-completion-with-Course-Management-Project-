const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Serve add_course.html
router.get('/add_course', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'files', 'add_course.html'));
});

// Handle form submission
router.post('/add_course', (req, res) => {
    const { courseName, courseCode } = req.body;
    const filePath = path.join(__dirname, '..', 'data', 'courses.json');

    // Read existing courses
    let courses = [];
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        courses = JSON.parse(data);
    }

    // Add new course
    courses.push({ name: courseName, code: courseCode });

    // Save
    fs.writeFileSync(filePath, JSON.stringify(courses, null, 2));

    res.redirect('/course/view_courses');
});

module.exports = router;
