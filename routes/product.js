import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  addCategory,
  addImages,
  createProduct,
  deleteCategory,
  deleteProduct,
  deleteProductImage,
  getAdminProducts,
  getAllcategory,
  getAllProducts,
  getProductDetail,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/all", getAllProducts);
router
  .route("/single/:id")
  .get(getProductDetail)
  .put(updateProduct)
  .delete(isAuthenticated, deleteProduct);
router.post("/new", isAuthenticated, singleUpload, createProduct);

router.get("/admin", isAuthenticated, getAdminProducts);

router
  .route("/images/:id")
  .post(isAuthenticated, singleUpload, addImages)
  .delete(isAuthenticated, deleteProductImage);

router.post("/category", isAuthenticated, addCategory);
router.get("/categories", isAuthenticated, getAllcategory);
router.delete("/category/:id", isAuthenticated, deleteCategory);
export default router;
