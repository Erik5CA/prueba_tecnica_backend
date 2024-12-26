import { UniqueConstraintError, ValidationError } from "sequelize";
import { deleteImage } from "../utils/index.js";
import { userService } from "../services/user.service.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting all users" });
  }
};

// Create a user
export const createUser = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    await userService.createUser({
      name,
      lastname,
      email,
      image,
      password,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    deleteImage(req.file?.filename); // Delete image if it exists
    if (error instanceof UniqueConstraintError) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: "Must provide all fields" });
    }
    res.status(500).json({ message: "Error creating user" });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "Id not provided" });
    return;
  }
  const { name, lastname, email, password } = req.body;
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (name || lastname || email || password || req.file) {
      if (req.file) {
        // Delelete old image
        await deleteImage(user.image);
      }
      const image = req.file ? req.file.filename : user.image;

      await userService.updateUser(user, {
        name,
        lastname,
        email,
        password,
        image,
      });

      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(400).json({ message: "At least one field must be updated" });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof UniqueConstraintError) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Error updating user" });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "Id not provided" });
    return;
  }
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    await deleteImage(user.image);
    await userService.deleteUser(user);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};
