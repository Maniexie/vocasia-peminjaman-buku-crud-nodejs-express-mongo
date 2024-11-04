const express = require("express");
const categoryController = require("../controllers/category_controller");
const categoriesRouter = express.Router();

categoriesRouter.get("/categories", categoryController.getListCategory);
categoriesRouter.get("/category/:id", categoryController.getListCategoryById);
categoriesRouter.post("/category", categoryController.createCategory);
categoriesRouter.put("/category/:id", categoryController.createCategory);
categoriesRouter.delete("/category/:id", categoryController.deleteCategory);

module.exports = categoriesRouter;
