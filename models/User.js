const mongoose = require('mongoose');

//TODO: check requires and make configurations <-----

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    skills: { 
        type: String,
        required: [true, "Skills are required"],
        maxLength: [40, "Skills description is too long"]
    },
    adds: [{
        type: mongoose.Types.ObjectId,
        ref: "Add"
    }]

});

const User = mongoose.model('User', userSchema);

module.exports = User;