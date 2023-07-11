const mongoose = require('./connection');

const symptomaticEventSchema = new mongoose.Schema({
    symptom: String,
    startTime: Date,
    endTime: Date,
    treated: Boolean,
    treatment: String,
});

const SymptomaticEvents = mongoose.model('symptomaticEvent', symptomaticEventSchema);

module.exports = SymptomaticEvents