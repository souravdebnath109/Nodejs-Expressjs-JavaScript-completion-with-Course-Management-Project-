const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const adminRoutes = require('./routes/admin');
const courseRoutes = require('./routes/course');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes);
app.use('/course', courseRoutes);
const homePath = path.join(__dirname, 'public', 'files', 'home.html');

app.get('/', (req, res) => {
  res.sendFile(homePath);
});


// 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'files', 'error.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
