const express = require('express')

const {createAuthor,getAllauthors} = require("../controller/author.Controller")

const router = express.Router();

router.route("/create-author").post(createAuthor)
router.route("/getall-author").get(getAllauthors)
module.exports = router;