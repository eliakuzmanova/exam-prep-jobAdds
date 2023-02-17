const router = require("express").Router();

const homeController = require("../controllers/homeController")
const authController = require("../controllers/authController")
const addController = require("../controllers/addController")
const {isAuth} = require("../middlewares/authMiddleware")

//add middleware to the needed routes <<<<-----------------------

router.get("/", homeController.getHomeView)
router.get("/404", homeController.get404View)

router.get("/allAdds", addController.getCatalogView) //<----checkname if catalog 

router.get("/create" , isAuth, addController.getCreateView) 
router.post("/create", isAuth, addController.postCreate)

router.get("/details/:id", addController.getDetailsView)

//router.get("/delete", isAuth, addController.getDelete)

router.get("/edit/:id", isAuth, addController.getEditView)
router.post("/edit/:id", isAuth, addController.postEdit)

router.get("/register", authController.getRegisterView);
router.post("/register", authController.postRegister);

router.get("/login", authController.getLoginView);
router.post("/login", authController.postLogin);

router.get("/logout", authController.getLogout);

module.exports = router