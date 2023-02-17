const addService = require("../services/addService");
const errorUtils = require("../utils/errorUtils");
const User = require("../models/User");

exports.getCatalogView = async (req, res) => {

    try {
        const adds = await addService.getAll();
        res.render("add/allAdds", { adds })
    } catch (err) {

        return errorUtils.errorResponse(res, "home/index", err, 404);

    };
}

exports.getCreateView = (req, res) => {
    try {
        res.render("add/create")
    } catch (err) {
        return errorUtils.errorResponse(res, "home/index", err, 404);

    }
};

exports.postCreate = async (req, res) => {
    try {
        const data = req.body;
        const userId = req.user.userId; //<----- check userId

        await addService.create(data, userId)

        res.redirect("/allAdds") // <---- check redirect
    } catch (err) {
        return errorUtils.errorResponse(res, "add/create", err, 404);
    }
};

exports.getEditView = async (req, res) => {
    try {
        const id = req.params.id;
        const add = await addService.getById(id);

        res.render("add/edit", { add })
    } catch (err) {
        return errorUtils.errorResponse(res, "home/index", err, 404);
    }
};

exports.postEdit = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        await addService.update(data, id);

        res.redirect(`/details/${id}`) // <---- check redirect
    } catch (err) {
        return errorUtils.errorResponse(res, "add/edit", err, 404);
    }
};

exports.getDelete = async (req, res) => {
    try {
        const id = req.params.id;
        await addService.delete(id);
        res.redirect("/allAdds") // <---- check redirect 
    } catch (err) {
        return errorUtils.errorResponse(res, "home/index", err, 404);
    }
};

exports.getDetailsView = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user?.userId;

        const add = await addService.getByIdWithAuthor(id)

        const isAuth = Boolean(userId);

        const isAuthor = userId == add.author._id

        const isCandidate = add.appliers?.some(x => x._id == userId)

        const candidates = add.appliers?.length

        res.render("add/details", { add, isAuth, isAuthor, isCandidate, candidates })
    } catch (err) {
        return errorUtils.errorResponse(res, "home/index", err, 404);
    }

};

exports.getApplyView = async (req, res) => {

    try {

        const userId = req.user.userId
        const id = req.params.id

        const add = await addService.getById(id)

        const user = await User.findById(userId)

        user.adds.push(id)
        add.appliers.push(userId)

        await User.findByIdAndUpdate(userId, { ...user })
        await addService.update(add, id)
        res.redirect(`/details/${id}`)
    } catch (err) {
        return errorUtils.errorResponse(res, "home/index", err, 404);
    }
};

exports.getSearchView = async (req, res) => {
    try {
        res.render("add/search")
    } catch (err) {
        return errorUtils.errorResponse(res, "home/index", err, 404);
    }
}

exports.postSearch = async (req, res) => {

    try {
        const {search} = req.body

        const allAdds = await addService.getAllAddsPop();
        
      const adds =  allAdds.filter(add => add.author.email == search)
   
        res.render("add/search", {adds, search})
    } catch (err) {
        return errorUtils.errorResponse(res, "add/search", err, 404);
    }

}
