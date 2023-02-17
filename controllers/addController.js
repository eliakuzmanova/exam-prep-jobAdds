const addController = require("../services/addService");
const errorUtils = require("../utils/errorUtils");

// exports.getCatalogView = async (req, res) => {

//     try{
//       const adds = await addController.getAll();
//       res.render("add/allAds", {adds})
//     } catch (err) {

//     return errorUtils.errorResponse(res, "home/404", err, 404);

//    };
// }

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

        await addController.create(data, userId)

        res.redirect("/allAds") // <---- check redirect
    } catch (err) {
        return errorUtils.errorResponse(res, "add/create", err, 404);
    }
};

// exports.getEditView = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const add = await addController.getById(id);
        
//         res.render("add/edit", {add})
//     } catch (err) {
//         return errorUtils.errorResponse(res, "home/404", err, 404);
//     }
// };

// exports.postEdit = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;

//         await addController.update(data, id);

//         res.render(`/details/${id}`) // <---- check redirect
//     } catch (err) {
//         return errorUtils.errorResponse(res, "add/edit", err, 404);  
//     }
// };

// exports.getDelete = async (req, res) => {
//     try {
//         const id = req.params.id;
//         await addController.delete(id);
//    res.redirect("/allAds") // <---- check redirect 
//     } catch (err) {
//         return errorUtils.errorResponse(res, "home/404", err, 404);
//     }
// };