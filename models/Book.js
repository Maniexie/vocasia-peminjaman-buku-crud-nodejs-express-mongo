const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
  description: String,
  stock: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  image: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

module.exports = mongoose.model("book", bookSchema);
