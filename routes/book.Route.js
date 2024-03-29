
const express = require("express")
const{createBook,getBooks,updateBook,deleteBook} = require("../controller/book.Contoller")

const router = express.Router();
router.route("/create-book").post(createBook)
router.route("/get-books").get(getBooks)
router.route("/update-books/:id").put(updateBook)
router.route("/delete-books/:id").delete(deleteBook)
module.exports = router;

//65fab1a3ce7eadb64f72ab8d