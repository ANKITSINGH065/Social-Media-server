import express from "express";
import {
  ProcessOrder,
  createOrder,
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  processPayment,
} from "../controllers/order.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, createOrder);
router.get("/me", isAuthenticated, getMyOrders);
router.get("/admin", isAdmin, getAdminOrders);

router.post("/payment", isAuthenticated, processPayment);

router
  .route("/single/:id")
  .get(isAuthenticated, getOrderDetails)
  .put(isAuthenticated, ProcessOrder);

export default router;
