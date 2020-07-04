const router = require("express").Router();
const productRoutes = require("./homePage");
const userAuth = require("./userAuth");

router.use("/", productRoutes);
router.use("/", userAuth);

module.exports = router;