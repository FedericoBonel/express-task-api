require("dotenv").config();

const logger = require("./src/middleware/Logger");
const notFound = require("./src/middleware/NotFound");
const errorHandler = require("./src/middleware/ErrorHandler");
const tasksRouter = require("./src/routes/TasksRoute");
const connectToDB = require("./src/db/Connect");

const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 5000;
const API_URI = "/api/v1";

// Create express app
const app = express();

// Allow cross origin requests through cors middleware
app.use(cors({ origin: "http://localhost:3000" }));

app.use(API_URI, [logger, express.json()]);

// Set up endpoints
app.use(`${API_URI}/tasks`, tasksRouter);

// Middleware that handles not found routes
app.use(notFound)

// Middleware to handle errors that may happen during requests
app.use(errorHandler);

// Connect to database and start server only if connection is successful
const startServer = async () => {
    try {
        await connectToDB(process.env.MONGODB_URI);
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();
