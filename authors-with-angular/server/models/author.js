const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'please insert the name'],
        minlength:[3,'name must be longer than 3'],
        trim: true
    }
})

module.exports = {
    Author: mongoose.model('Author',AuthorSchema)
}