const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    imageAdvert: String,
    title: String,
    Team: String,
    Nationality: String,
    Jersey_Number: Number,
    Age: String
})
module.exports = mongoose.model('Card', CardSchema);