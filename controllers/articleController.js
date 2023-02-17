const articleService = require("../services/articleService");

// exports.getCatalogView = async (req, res) => {

//     try{
//       const articles = await articleService.getAll();
//       res.render("article/catalog", {articles})
//     } catch (err) {

//     return errorUtils.errorResponse(res, "home/404", err, 404);

//    };
// }

// exports.getCreateView = (req, res) => {
//     try {
//         res.render("article/create")
//     } catch (err) {
//         return errorUtils.errorResponse(res, "home/404", err, 404);

//     }
// };

// exports.postCreate = async (req, res) => {
//     try {
//         const data = req.body;
//         const userId = req.user.userId; //<----- check userId

//         await articleService.create(data, userId)

//         res.redirect("/catalog") // <---- check redirect
//     } catch (err) {
//         return errorUtils.errorResponse(res, "article/create", err, 404);
//     }
// };

// exports.getEditView = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const article = await articleService.getById(id);
        
//         res.render("article/edit", {article})
//     } catch (err) {
//         return errorUtils.errorResponse(res, "home/404", err, 404);
//     }
// };

// exports.postEdit = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;

//         await articleService.update(data, id);

//         res.render(`/details/${id}`) // <---- check redirect
//     } catch (err) {
//         return errorUtils.errorResponse(res, "article/edit", err, 404);  
//     }
// };

// exports.getDelete = async (req, res) => {
//     try {
//         const id = req.params.id;
//         await articleService.delete(id);
//     } catch (err) {
//         return errorUtils.errorResponse(res, "home/404", err, 404);
//     }
// };