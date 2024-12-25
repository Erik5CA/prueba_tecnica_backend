import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/user.controller.js";
import multer from "multer";

const storage = multer({ dest: "uploads/" });

const router = Router();

// Get all users
router.get("/", getAllUsers);

// Create a user
router.post("/", storage.single("image"), createUser);

// Update a user
router.put("/:id", storage.single("image"), updateUser);

// Delete a user
router.delete("/:id", deleteUser);

export default router;