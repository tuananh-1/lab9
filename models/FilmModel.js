var mongoose = require('mongoose');
var FilmSchema = mongoose.Schema({
    title : String,
    actor: String,
    director:String,
    year : String,
    poster: String,
    trailer : String
});
 var FilmModel = mongoose.model("film",FilmSchema, "film");
  module.exports = FilmModel;