import { User } from "../models/user.model.js";
import { UniqueConstraintError, ValidationError } from "sequelize";
import {
  deleteImage,
  encryptPassword,
  renameAndGetPathImage,
} from "../utils/index.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "lastname", "email", "image"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting all users" });
  }
};

// Create a user
export const createUser = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  try {
    const newUser = await User.create({
      name,
      lastname,
      email,
      password: await encryptPassword(password),
    });
    const image = renameAndGetPathImage(req.file, newUser.id);
    newUser.set({ image });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    deleteImage(req.file?.path); // Delete image if it exists
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
    const newImage = renameAndGetPathImage(req.file, id);
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (name || lastname || email || password || newImage) {
      if (newImage) {
        // Delelete old image
        deleteImage(user.image);
      }
      user.set({
        name: name ? name : user.name,
        lastname: lastname ? lastname : user.lastname,
        email: email ? email : user.email,
        image: newImage ? newImage : user.image,
        password: password ? await encryptPassword(password) : user.password,
      });
      await user.save();
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
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    deleteImage(user.image);
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};
