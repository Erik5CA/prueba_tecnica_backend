import bcrypt from "bcrypt";
import fs from "node:fs";

export const encryptPassword = async (password) => {
  if (!password) return null;
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const renameAndGetPathImage = (file, userId) => {
  if (!file) {
    return null;
  }
  const newPath = `./uploads/${userId}-${file.originalname}`;
  fs.rename(file.path, newPath, (err) => {
    if (err) throw err;
  });
  return newPath;
};

export const deleteImage = (imagePath) => {
  if (!imagePath) return;
  fs.unlink(imagePath, (err) => {
    if (err) throw err;
  });
};
