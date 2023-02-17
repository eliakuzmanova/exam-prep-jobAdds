const addService = require("../services/addService");
const errorUtils = require("../utils/errorUtils");

exports.getHomeView = async (req, res) => {

    try {
        // const adds = await addService.getFirstThree();
        res.render('home/index')
    } catch (err) {
        return errorUtils.errorResponse(res, "home/404", err, 404);
    }
}

exports.get404View = (req, res) => {	
    res.render('home/404')
}