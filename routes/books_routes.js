const express = require("express");
const booksController = require("../controllers/books_controller");

const booksRoutes = express.Router();

booksRoutes.get("/books", booksController.getBooks);
booksRoutes.get("/book/:id", booksController.getBooksById);
booksRoutes.post("/book/create", booksController.createBook);
booksRoutes.put("/book/:id", booksController.updateBook);
booksRoutes.delete("/book/:id", booksController.deleteBook);
booksRoutes.post("/book/upload/:id", booksController.uploadBook);

module.exports = booksRoutes;
