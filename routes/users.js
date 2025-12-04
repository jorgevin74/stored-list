var express = require('express');
var router = express.Router();
const Movies = require('../models/Movies.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', async function(req, res){
  try{
    const movies = await Movies.find();
    res.json(movies)
  } catch (error){
    console.log(error);
  }
})

module.exports = router;
