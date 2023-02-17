const addService = require("../services/addService");
const errorUtils = require("../utils/errorUtils");

exports.getCatalogView = async (req, res) => {

    try{
      const adds = await addService.getAll();
      res.render("add/allAdds", {adds})
    } catch (err) {

    return errorUtils.errorResponse(res, "home/404", err, 404);

   };
}

exports.getCreateView = (req, res) => {
    try {
        res.render("add/create")
    } catch (err) {
        return errorUtils.errorResponse(res, "home/404", err, 404);

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
        
        res.render("add/edit", {add})
    } catch (err) {
        return errorUtils.errorResponse(res, "home/404", err, 404);
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

// exports.getDelete = async (req, res) => {
//     try {
//         const id = req.params.id;
//         await addService.delete(id);
//    res.redirect("/allAds") // <---- check redirect 
//     } catch (err) {
//         return errorUtils.errorResponse(res, "home/404", err, 404);
//     }
// };

exports.getDetailsView = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user?.userId;

        const add = await addService.getByIdWithAuthor(id)

        const isAuth = Boolean(userId);
       
        const isAuthor = userId == add.author._id
       
        const isCandidate = add.appliers?.some(x => x == userId)
      
        const candidates = add.appliers?.length

        res.render("add/details", {add, isAuth, isAuthor, isCandidate, candidates})
    } catch (err) {
        return errorUtils.errorResponse(res, "home/404", err, 404);
    }

};