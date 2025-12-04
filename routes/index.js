var express = require('express');
var router = express.Router();
const Movies = require('../models/Movies.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const movies = await Movies.find();
    res.render('index', { title: 'Express', list: [] });
  } catch (error){
    console.log(error);
  }
});

module.exports = router;
