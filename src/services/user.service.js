import { User } from "../models/user.model.js";
import { encryptPassword } from "../utils/index.js";

// Create a new user
/*
  @param {Object} user - The user object to create
  @param {string} user.name - The name of the user
  @param {string} user.lastname - The lastname of the user
  @param {string} user.email - The email of the user
  @param {string | null} user.password - The password of the user
  @param {string} user.image - The image of the user
  @returns {Promise<User>} - The created user
*/
const createUser = async ({ name, lastname, email, password, image }) => {
  const newUser = await User.create({
    name,
    lastname,
    email,
    image,
    password: await encryptPassword(password),
  });
  return newUser;
};

// Get all users
/*
  @returns {Promise<User[]>} - An array of users
*/
const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: ["id", "name", "lastname", "email", "image"],
  });
  return users;
};

// Get a user by id
/*
  @param {number} id - The id of the user to get
  @returns {Promise<User | null>} - The user with the given id or null if not found
*/
const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

// Update a user
/*
  @param {User} user - The user to update
  @param {Object} user - The user object to update
  @param {string} user.name - The name of the user
  @param {string} user.lastname - The lastname of the user
  @param {string} user.email - The email of the user
  @param {string | null} user.password - The password of the user
  @param {string} user.image - The image of the user
  @returns {Promise<User>} - The updated user
*/
const updateUser = async (user, { name, lastname, email, password, image }) => {
  user.set({
    name: name ? name : user.name,
    lastname: lastname ? lastname : user.lastname,
    email: email ? email : user.email,
    image: image ? image : user.image,
    password: password ? await encryptPassword(password) : user.password,
  });
  await user.save();
  return user;
};

// Delete a user
/*
  @param {User} user - The user to delete
  @returns {Promise<void>} - A promise that resolves when the user is deleted
*/
const deleteUser = async (user) => {
  await user.destroy();
};

export const userService = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
