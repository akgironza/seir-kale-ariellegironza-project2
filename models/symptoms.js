// Import connection file with configured Mongoose package
const mongoose = require('./connection');

// Set schema variable
const symptomSchema = new mongoose.Schema({
    description: String,
    startTime: Date,
    endTime: Date,
    treated: Boolean,
    treatment: String,
});

// Create Mongoose model based on schema
const Symptoms = mongoose.model('symptom', symptomSchema);

// Export model
module.exports = Symptoms;