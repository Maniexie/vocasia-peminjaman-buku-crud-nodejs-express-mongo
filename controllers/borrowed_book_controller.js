const BorrowedBook = require("../models/BorrowedBook");

const getBorrowedBook = async (req, res) => {
  try {
    const borrowedBook = await BorrowedBook.find({});
    res.status(200).json({
      status: "success | OK",
      message: "list of borrowed book",
      data: borrowedBook,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
      error: error.message,
    });
  }
};

const getBorrowedBookById = async (req, res) => {
  try {
    const borrowedBook = await BorrowedBook.findById(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "list of borrowed book by id",
      data: borrowedBook,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
      error: error.message,
    });
  }
};

const createBorrowedBook = async (req, res) => {
  try {
    const borrowedBook = new BorrowedBook(req.body);
    await borrowedBook.save();
    res.status(201).json({
      status: "success | OK",
      message: "create borrowed book successfully",
      data: borrowedBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

const returnBorrowedBook = async (req, res) => {
  try {
    const borrowedBook = await BorrowedBook.findById(req.params.id);
    const returnDate = new Date();

    if (!borrowedBook) {
      return res.status(404).json({
        status: "fail",
        message: "borrowed book not found",
      });
    }

    const expectedReturnDate = new Date(borrowedBook.expectedReturn_at);
    const isLate = returnDate > expectedReturnDate;

    let lateFee = 0;

    if (isLate) {
      const oneDay = 24 * 60 * 60 * 1000;
      const daysLate = Math.ceil((returnDate - expectedReturnDate) / oneDay);
      const finePerDay = 7000;

      lateFee = daysLate * finePerDay;
    }

    borrowedBook.return_at = returnDate;
    borrowedBook.lateFee = lateFee;
    await borrowedBook.save();

    res.status(200).json({
      status: "success | OK",
      message: "return borrowed book successfully",
      data: {
        return_at: returnBorrowedBook.return_at,
        lateFee: returnBorrowedBook.lateFee,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

const deleteBorrowedBook = async (req, res) => {
  try {
    const borrowedBook = await BorrowedBook.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "delete borrowed book successfully",
      data: borrowedBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

// const createReturnBorrowedBook = async (req, res) => {
//   try {
//     const borrowedBook = new BorrowedBook(req.body);
//     await borrowedBook.save();
//     res.status(201).json({
//       status: "success | OK",
//       message: "create borrowed book successfully",
//       data: borrowedBook,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       error: error.message,
//     });
//   }
// };

module.exports = {
  getBorrowedBook,
  createBorrowedBook,
  returnBorrowedBook,
  getBorrowedBookById,
  deleteBorrowedBook,
};
