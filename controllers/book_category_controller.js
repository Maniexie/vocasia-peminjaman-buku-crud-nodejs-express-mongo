const BookCategory = require("../models/BookCategory");

const getListBookCategory = async (req, res) => {
  try {
    const bookCategory = await BookCategory.find({});
    res.status(200).json({
      status: "success | OK",
      message: "list of book category",
      data: bookCategory,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const getBookCategoryByGenre = async (req, res) => {
  try {
    const bookCategory = await BookCategory.findById(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "list of book category by genre",
      data: bookCategory,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const createBookCategory = async (req, res) => {
  try {
    const bookCategory = new BookCategory(req.body);
    await bookCategory.save();
    res.status(201).json({
      status: "success | OK",
      message: "create book category successfully",
      data: bookCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = {
  getListBookCategory,
  getBookCategoryByGenre,
  createBookCategory,
};
