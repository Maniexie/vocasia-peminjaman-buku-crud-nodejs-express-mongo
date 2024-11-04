const { get } = require("mongoose");
const Category = require("../models/Category");

const getListCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      status: "success | OK",
      message: "list of categories",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const getListCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "list of categories by id",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success | OK",
      message: "update list of categories by id",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success | OK",
      message: "delete category successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = {
  getListCategory,
  getListCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
