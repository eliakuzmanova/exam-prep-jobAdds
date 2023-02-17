const router = require("express").Router();

const homeController = require("../controllers/homeController")
const authController = require("../controllers/authController")
const articleController = require("../controllers/articleController")
const {isAuth} = require("../middlewares/authMiddleware")

//add middleware to the needed routes <<<<-----------------------

router.get("/", homeController.getHomeView)
router.get("/404", homeController.get404View)

// router.get("/catalog", articleController.getCatalogView) <----checkname if catalog 

// router.get("/create" , isAuth, articleController.getCreateView) 
// router.post("/create", isAuth, articleController.postCreate)

//router.get("/delete", isAuth, articleController.getDelete)

// router.get("/edit", isAuth, articleController.getEditView)
// router.post("/edit", isAuth, articleController.postEdit)

router.get("/register", authController.getRegisterView);
router.post("/register", authController.postRegister);

router.get("/login", authController.getLoginView);
router.post("/login", authController.postLogin);

router.get("/logout", authController.getLogout);

module.exports = router