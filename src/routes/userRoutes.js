const { Router } = require("express");
const {
  createUser,
  detailUser,
  listUser,
} = require("../controllers/userControllers");

const router = Router();

router.get("/api/v1/users", listUser);
router.get("/api/v1/users/:id", detailUser);
router.post("/api/v1/users", createUser);

module.exports = router;
