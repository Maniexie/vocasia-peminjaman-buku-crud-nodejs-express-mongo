const multer = require("multer");
const Author = require("../models/Author");
// const upload = multer({ dest: "uploads/" });

// Konfigurasi multer untuk menyimpan file ke folder uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder penyimpanan
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Nama file unik
  },
});

const upload = multer({ storage });
// const upload = multer({ dest: "uploads/" });

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.status(200).json({
      status: "success | OK",
      message: "List Authors",
      data: authors,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "List Author By id",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json({
      status: "success | OK",
      message: "create author successfully",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success | OK",
      message: "update author successfully",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "delete author successfully",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

const uploadImageAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({
        status: "fail",
        message: "Author not found",
      });
    }

    upload.single("author")(req, res, async (err) => {
      if (err) {
        console.log("Error in file upload:", err);
        return res.status(500).json({ error: err.message });
      }

      author.image = req.file ? req.file.path : null;

      // Simpan perubahan data author
      await author.save();

      res.status(200).json({
        status: "success | OK",
        message: "Upload image author successfully",
        data: author,
      });
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
  uploadImageAuthor,
};
