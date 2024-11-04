const express = require("express");
const testRoutes = require("./test_routes");
const books_routes = require("./books_routes");
const categories_routes = require("./categories_route");
const authorRoutes = require("./author_route");
const bookCategoryRoutes = require("./book_category_route");
const borrowerRoutes = require("./borrower.route");
const borrowedBookRoutes = require("./borrowed_book_route");

const routes = express.Router();

// kumpulkan semua routes disini per bagian ex : /author,/books dll
routes.use(testRoutes);
routes.use(books_routes);
routes.use(categories_routes);
routes.use(authorRoutes);
routes.use(bookCategoryRoutes);
routes.use(borrowerRoutes);
routes.use(borrowedBookRoutes);

module.exports = routes;
