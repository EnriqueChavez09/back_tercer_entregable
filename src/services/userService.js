const User = require("../models/userModel");

class UserService {
  static async create(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
  static async list() {
    try {
      const listUsers = await User.findAll({
        attributes: ["id", "username", "email"],
      });
      return listUsers;
    } catch (error) {
      throw error;
    }
  }
  static async detail(id) {
    try {
      const user = User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
