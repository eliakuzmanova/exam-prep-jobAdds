const Add = require("../models/Add");

exports.getAll = () => Add.find({}).lean();

exports.getById = (id) => Add.findById(id).lean();

exports.create = (data, userId) => Add.create({...data, author: userId}); // <---- check owner

exports.update = (data, id) => Add.findByIdAndUpdate(id, {...data});

exports.delete = (id) => Add.findByIdAndRemove(id)

exports.getFirstThree = () => Add.find({}).limit(3).lean();

exports.getByIdWithAuthor= (id) => Add.findById(id).populate("author").populate("appliers").lean();

exports.getAllAddsPop = () => Add.find({}).populate("author").lean();