const express = require("express");
const borrowedBookController = require("../controllers/borrowed_book_controller");
const borrowedBookRoutes = express.Router();

borrowedBookRoutes.get(
  "/borrowedbooks",
  borrowedBookController.getBorrowedBook
);
borrowedBookRoutes.get(
  "/borrowedbook/:id",
  borrowedBookController.getBorrowedBookById
);
borrowedBookRoutes.post(
  "/borrowedbook",
  borrowedBookController.createBorrowedBook
);

borrowedBookRoutes.delete(
  "/borrowedbook/:id",
  borrowedBookController.deleteBorrowedBook
);

module.exports = borrowedBookRoutes;
