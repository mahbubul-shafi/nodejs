const express = require("express");
const browserRouter = require("./routes/users.route");
const app = express();

// Route for /api/user
app.use('/api/user', browserRouter);

// Home route handler (only for exact path '/')
app.get('/', (req, res) => {
    res.send("This is home");
});

// Catch-all error handler for unmatched routes
app.use((req, res) => {
    res.status(404).send("Oops! The page you're looking for doesn't exist.");
});

module.exports = app;