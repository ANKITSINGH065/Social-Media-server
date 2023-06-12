import express from "express";
import {
  forgetpassword,
  getMyProfile,
  logOut,
  login,
  register,
  resetpassword,
  updatePassword,
  updatePic,
  updateProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login", login);
router.post("/new", singleUpload, register);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", logOut);
router.get("/", logOut);
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, updatePassword);
router.put("/updatepic", isAuthenticated, singleUpload, updatePic);

router.route("/forgetpassword").post(forgetpassword).put(resetpassword);

export default router;
