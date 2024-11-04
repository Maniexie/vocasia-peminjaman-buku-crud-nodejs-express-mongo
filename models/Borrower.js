const mongoose = require("mongoose");

const borrowerSchema = new mongoose.Schema({
  name: { type: String },
  join_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
  deleted_At: { type: Date, default: null },
});

module.exports = mongoose.model("borrower", borrowerSchema);
