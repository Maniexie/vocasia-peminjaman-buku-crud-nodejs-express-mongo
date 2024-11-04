const Borrower = require("../models/Borrower");

const getBorrower = async (req, res) => {
  try {
    const borrower = await Borrower.find({});
    res.status(200).json({
      status: "success | OK",
      message: "list of borrower",
      data: borrower,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getBorrowerById = async (req, res) => {
  try {
    const borrower = await Borrower.findById(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "list of borrower by id",
      data: borrower,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const createBorrower = async (req, res) => {
  try {
    const borrower = new Borrower(req.body);
    await borrower.save();
    res.status(201).json({
      status: "success | OK",
      message: "create borrower successfully",
      data: borrower,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateBorrower = async (req, res) => {
  try {
    const borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success | OK",
      message: "update borrower successfully",
      data: borrower,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteBorrower = async (req, res) => {
  try {
    const borrower = await Borrower.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "delete borrower successfully",
      data: borrower,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createBorrower,
  getBorrower,
  getBorrowerById,
  updateBorrower,
  deleteBorrower,
};
