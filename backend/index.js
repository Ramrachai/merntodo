const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
const todoRoutes = require("./routes/todoRoutes")

const app = express();
const cors = require('cors');
require('dotenv').config();


// Middleware Connections
const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Mongo DB Connections
mongoose
    .connect(process.env.MONGO_DB_URL)
    .then((response) => {
        console.log('MongoDB Connection Succeeded.');
    })
    .catch((error) => {
        console.log('Error in DB connection: ' + error);
    });




app.use("/todos", todoRoutes)
// Routes
app.get('/', (req, res) => {
    console.log('home route is working');
    return res.status(200).json({
        message: 'Home route is working',
    });
});



// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
