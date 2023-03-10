const UserService = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await UserService.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const listUser = async (req, res) => {
  try {
    const listUsers = await UserService.list();
    res.status(200).json(listUsers);
  } catch (error) {
    res.status(400).json(error);
  }
};

const detailUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.detail(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createUser, listUser, detailUser };
