const express = require("express");
const bookCategoryController = require("../controllers/book_category_controller");

const bookCategoryRoutes = express.Router();

bookCategoryRoutes.get(
  "/bookscategory",
  bookCategoryController.getListBookCategory
);
bookCategoryRoutes.get(
  "bookcategory/:id",
  bookCategoryController.getBookCategoryByGenre
);

bookCategoryRoutes.post(
  "/bookcategory",
  bookCategoryController.createBookCategory
);

module.exports = bookCategoryRoutes;
