const router = require("express").Router();

const homeController = require("../controllers/homeController")
const authController = require("../controllers/authController")
const addController = require("../controllers/addController")
const {isAuth} = require("../middlewares/authMiddleware")

//add middleware to the needed routes <<<<-----------------------

router.get("/", homeController.getHomeView)
router.get("/404", homeController.get404View)

// router.get("/allAds", addController.getCatalogView) <----checkname if catalog 

router.get("/create" , isAuth, addController.getCreateView) 
router.post("/create", isAuth, addController.postCreate)

//router.get("/delete", isAuth, addController.getDelete)

// router.get("/edit", isAuth, addController.getEditView)
// router.post("/edit", isAuth, addController.postEdit)

router.get("/register", authController.getRegisterView);
router.post("/register", authController.postRegister);

router.get("/login", authController.getLoginView);
router.post("/login", authController.postLogin);

router.get("/logout", authController.getLogout);

module.exports = router