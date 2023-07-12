// Import connection file with configured Mongoose package
const mongoose = require('./connection');

// Set schema variable
const symptomaticEventSchema = new mongoose.Schema({
    symptom: String,
    startTime: Date,
    endTime: Date,
    treated: Boolean,
    treatment: String,
});

// Create Mongoose model based on schema
const SymptomaticEvents = mongoose.model('symptomaticEvent', symptomaticEventSchema);

// Export model
module.exports = SymptomaticEvents