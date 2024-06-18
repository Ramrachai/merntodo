const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require("./routes/todo.routes")
const imageRoutes = require("./routes/image.routes")
const path = require('path')

const app = express();
const cors = require('cors');
require('dotenv').config();


// Middleware Connections


// Allow all origins
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Mongo DB Connections
mongoose
    .connect(process.env.MONGO_DB_URL)
    .then((response) => {
        console.log('MongoDB Connection Succeeded.');
    })
    .catch((error) => {
        console.log('Error in DB connection: ' + error);
    });


// Routes
app.get('/', (req, res) => {
    console.log('home route is working');
    return res.status(200).json({
        message: 'Home route is working',
    });
});
app.use("/todos", todoRoutes)
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))
app.use('/images', imageRoutes)


// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
