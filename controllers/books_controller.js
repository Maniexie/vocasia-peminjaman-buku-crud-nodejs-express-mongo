const Book = require("../models/Book");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      status: "success | OK",
      message: "list of books ",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const getBooksById = async (req, res) => {
  try {
    const books = await Book.findById(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "list of books by id",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const uploadBook = async (req, res) => {
  try {
    upload.single("cover")(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
      }

      console.log("Uploaded file:", req.file);

      const { id } = req.params;
      const coverPath = req.file ? req.file.path : null;

      const book = await Book.findByIdAndUpdate(
        id,
        { image: coverPath },
        { new: true }
      );

      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json(book);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBooksById,
  updateBook,
  deleteBook,
  uploadBook,
};
