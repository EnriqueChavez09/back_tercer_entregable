const express = require("express");
const db = require("./utils/database");

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Conexión de base de datos OK");
  })
  .catch((e) => {
    console.log(e);
  });
