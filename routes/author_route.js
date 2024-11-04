const authorController = require("../controllers/author_controller");
const express = require("express");

const authorRoutes = express.Router();

authorRoutes.get("/authors", authorController.getAuthors);
authorRoutes.get("/author/:id", authorController.getAuthorById);
authorRoutes.post("/author", authorController.createAuthor);
authorRoutes.put("/author/:id", authorController.updateAuthor);
authorRoutes.delete("/author/:id", authorController.deleteAuthor);
authorRoutes.post("/author/:id", authorController.uploadImageAuthor);

module.exports = authorRoutes;
