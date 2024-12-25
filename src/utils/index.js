import bcrypt from "bcrypt";
import fs from "node:fs";
import { DESTINATION } from "../middleware/file.middleware.js";
import { join } from "node:path";

// Encrypt password
export const encryptPassword = async (password) => {
  if (!password) return null; // If no password, return null
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Delete image
export const deleteImage = (filename) => {
  if (!filename) return; // If no filename, do nothing
  // Delete the image from the uploads folder
  fs.unlink(join(DESTINATION, filename), (err) => {
    if (err) throw err;
  });
};
