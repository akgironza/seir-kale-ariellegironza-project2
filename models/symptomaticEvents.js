const mongoose = require('./connection');

const symptomaticEventSchema = new mongoose.Schema({
    name: String
});

const SymptomaticEvents = mongoose.model('symptom', symptomaticEventSchema);

module.exports = SymptomaticEvents