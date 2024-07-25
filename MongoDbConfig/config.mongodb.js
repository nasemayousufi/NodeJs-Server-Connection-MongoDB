const mongodbConnect = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongodbConnect.connect(
    process.env.SERVER_MONGODB_URI, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


 module.exports = mongodbConnect;