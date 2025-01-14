const router = require("express").Router();
const productControllers = require("../Controllers/productControllers");

router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getProductById);
router.post("/", productControllers.createProduct);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

module.exports = router;
