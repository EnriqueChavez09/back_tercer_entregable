const { Router } = require("express");
const {
  createCategory,
  detailCategory,
  listCategory,
} = require("../controllers/categoryControllers");
const router = Router();

router.get("/api/v1/categories", listCategory);
router.get("/api/v1/categories/:id", detailCategory);
router.post("/api/v1/categories", createCategory);

module.exports = router;
