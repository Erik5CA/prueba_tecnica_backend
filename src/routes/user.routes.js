import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { storage } from "../middleware/file.middleware.js";

const router = Router();

// Get all users
router.get("/", getAllUsers);

// Create a user
router.post("/", storage.single("image"), createUser);

// Update a user
// Parameter id represents the id of the user to update
router.put("/:id", storage.single("image"), updateUser);

// Delete a user
// Parameter id represents the id of the user to delete
router.delete("/:id", deleteUser);

export default router;
