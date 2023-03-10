const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModel = require("./models/initModel");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Conexión de base de datos OK");
  })
  .catch((e) => {
    console.log(e);
  });

initModel();

db.sync()
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

const PORT = 8000;

app.use(userRoutes);
app.use(categoryRoutes);
app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
