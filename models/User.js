const mongoose = require('mongoose');

//Use of comments during the code

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true
    }
});

//Use of comments during the code

const User = mongoose.model('User', userSchema);

module.exports = User;


//Use of comments during the code