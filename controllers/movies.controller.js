const Movie = require("../models/movie.model");

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies).status(200);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllMovies
}