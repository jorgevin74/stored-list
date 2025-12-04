const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    movieTitle: String,
    genre: String
});

module.exports = mongoose.model('movies', MoviesSchema);