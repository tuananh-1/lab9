var express = require ('express');

const FilmModel = require('../models/FilmModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var movie_list = await FilmModel.find({})
   res.render('movie/index', { movies : movie_list })
})

router.get('/delete/:id', async(req, res) => {
   await FilmModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete movie succeed !')});
   res.redirect('/film');
})