const mongoose = require('mongoose')

//create schema
const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String},
});

//create model
const Mon = mongoose.model('Mon', pokemonSchema);

module.exports = Mon;