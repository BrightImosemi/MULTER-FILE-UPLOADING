const router = require("express").Router();
const {
   addProduct,
   getAllProducts,
   getOneProduct,
   updateProduct,
   deleteProduct,
} = require("../controller/productController");
const upload = require("../middlewares/multer");

router.post("/product", upload.single("productImage"), addProduct);
router.get("/products", getAllProducts);
router.get("/product/:id", getOneProduct);
router.patch("/product/:id", upload.single("productImage"), updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
