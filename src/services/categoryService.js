const Category = require("../models/categoryModel");

class CategoryService {
  static async create(data) {
    try {
      const newCategory = await Category.create(data);
      return newCategory;
    } catch (error) {
      throw error;
    }
  }
  static async list() {
    try {
      const listCategories = await Category.findAll({
        attributes: ["id", "name"],
      });
      return listCategories;
    } catch (error) {
      throw error;
    }
  }
  static async detail(id) {
    try {
      const category = await Category.findByPk(id);
      return category;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoryService;
