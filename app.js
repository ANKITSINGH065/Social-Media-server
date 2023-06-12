import { config } from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config({ path: "./data/config.env" });

export const app = express();
app.use(express.json());
app.use(cookieParser());
app.get("/", (erq, res, next) => {
  res.send("working");
});

import user from "./routes/user.js";
import product from "./routes/product.js";
import { isAuthenticated } from "./middlewares/auth.js";
import order from "./routes/order.js";


app.use("/api/v1/user", user);
app.use("/api/v1/product",product);
app.use("/api/v1/order",order)
app.use(cors({
  credentials:true,
  methods:["GET","POST","PUT","DELETE"],
  origin:[process.env.FRONTEND_URI_1,process.env.FRONTEND_URI_2]
}))


app.use(errorMiddleware);

