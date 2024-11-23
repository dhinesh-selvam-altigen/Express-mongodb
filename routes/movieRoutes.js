const express = require('express');
const router = express.Router();
const { getAllMovies } = require('../controllers/movies.controller');

router.get('/', getAllMovies);

module.exports = router;