// Import dependencies
require('dotenv').config();
const mongoose = require('mongoose');

// Get database URL
const DATABASE_URL = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose.connect(DATABASE_URL, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Mongo connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

// Export the connection
module.exports = mongoose;