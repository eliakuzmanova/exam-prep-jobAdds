const mongoose = require('mongoose')

const addSchmema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
        minLength: [4, "Too short headline"]
    },
    location: {
        type: String,
        required: true,
        minLength: [8, "Too short location"]
    },
    companyName: {
        type: String,
        required: true,
        minLength: [3, "Too short company name"]
    },
    companyDescription: {
        type: String,
        required: true,
        maxLength: [40, "Too long description"]
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    appliers: {
     type: mongoose.Types.ObjectId,
    ref: "Add"
    }
});

const Add = mongoose.model('add', addSchmema);

module.exports = Add;