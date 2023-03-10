const CategoryService = require("../services/categoryService");

const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const newCategory = await CategoryService.create(data);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};

const listCategory = async (req, res) => {
  try {
    const listCategories = await CategoryService.list();
    res.status(200).json(listCategories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const detailCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryService.detail(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createCategory, listCategory, detailCategory };
