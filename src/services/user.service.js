import { User } from "../models/user.model.js";
import { encryptPassword } from "../utils/index.js";

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

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: ["id", "name", "lastname", "email", "image"],
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

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
