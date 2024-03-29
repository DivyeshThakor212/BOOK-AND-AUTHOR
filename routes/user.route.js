
const express = require("express")
const{registerUser} = require("../controller/user.controller")

const router = express.Router();
router.route("/register").post(registerUser)
// router.route("/login").get(loginUser)
module.exports = router;

//65fab1a3ce7eadb64f72ab8d