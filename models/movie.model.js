const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String]
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;