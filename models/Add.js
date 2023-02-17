const mongoose = require('mongoose')

const addSchmema = new mongoose.Schema({});

const Add = mongoose.model('add', addSchmema);

module.exports = Add;