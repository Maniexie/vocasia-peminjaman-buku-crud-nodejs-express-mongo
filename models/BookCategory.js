const mongoose = require("mongoose");

const bookCategorySchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
});

module.exports = mongoose.model("bookCategory", bookCategorySchema);
