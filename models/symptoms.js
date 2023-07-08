const mongoose = require('./connection');

const symptomSchema = new mongoose.Schema({
    name: String
});

const Symptoms = mongoose.model('symptom', symptomSchema);

module.exports = Symptoms;