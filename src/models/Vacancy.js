const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
   vacancy: String,
   idOccupant: Number,
   sector: String
});

module.exports = mongoose.model('Vacancy', VacancySchema);