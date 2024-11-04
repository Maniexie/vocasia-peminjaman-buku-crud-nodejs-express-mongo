const mongoose = require("mongoose");

const borrowedBookSchema = new mongoose.Schema({
  borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: "borrower" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
  borrowed_at: { type: Date, default: Date.now },
  expectedReturn_at: { type: Date, default: Date.now },
  return_at: { type: Date, default: null },
  lateFee: { type: Number, default: 0 },
});

module.exports = mongoose.model("borrowedBook", borrowedBookSchema);
