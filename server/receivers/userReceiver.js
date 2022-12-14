import express from "express";
import {
  addTag,
  getTags,
  getUserById,
  logInUser,
  logOutUser,
  registerUser,
  validateUser,
} from "../controllers/userController.js";

export const router = express.Router();

router.post("/registeruser", registerUser);

router.post("/login", logInUser);

router.get("/logout", logOutUser);

router.get("/validate", validateUser);

router.get("/gettags", getTags);
router.get("/getbyid", getUserById);

router.post("/addtag", addTag);
