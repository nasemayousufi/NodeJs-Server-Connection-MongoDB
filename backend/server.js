const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRouter = require('./Routes/userRoute');
const productRouter = require('./Routes/productRoute');

// Load environment variables from .env file
dotenv.config();

// Create express app
const serverApp = express();

// CORS for incoming requests
serverApp.use(cors());

// parse requests of content-type - application/json
serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/x-www-form-urlencoded
serverApp.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes:
serverApp.use("/api/users", userRouter);
serverApp.use("/api/products", productRouter);

// Server Hosted: 
serverApp.get('/', (req, res) => {
    res.send('Welcome to the Nodejs MongoDb Server Example');
});

// Server Error:
serverApp.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// Server Success:
const port = process.env.SERVER_PORT;
serverApp.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

module.exports = serverApp;