const Add = require("../models/Add");

exports.getAll = () => Add.find({}).lean();

exports.getById = (id) => Add.findById(id).lean();

exports.create = (data, userId) => Add.create({...data, author: userId}); // <---- check owner

exports.update = (data, id) => Add.findByIdAndUpdate(id, {...data});

exports.delete = (id) => Add.findByIdAndRemove(id)

exports.getFirstThree = () => Add.find({}).limit(3)