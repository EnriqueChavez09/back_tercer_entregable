const User = require("./userModel");
const Category = require("./categoryModel");
const Todo = require("./todoModel");

const initModel = () => {
  User.hasMany(Todo, { foreignKey: "userId" });
  Todo.belongsTo(User, { foreignKey: "userId" });

  Category.hasMany(Todo, { foreignKey: "categoryId" });
  Todo.belongsTo(Category, { foreignKey: "categoryId" });
};

module.exports = initModel;
