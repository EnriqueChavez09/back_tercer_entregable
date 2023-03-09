const { Sequelize } = require("sequelize");
const dataBase = new Sequelize(
  "postgres://postgres:secretsecret@localhost:5432/tercer_entregable"
);

module.exports = dataBase;
