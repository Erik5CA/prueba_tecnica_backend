import bcrypt from "bcrypt";
import fs from "node:fs";
import { DESTINATION } from "../middleware/file.middleware.js";
import { join } from "node:path";

export const encryptPassword = async (password) => {
  if (!password) return null;
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const deleteImage = (filename) => {
  if (!filename) return;
  fs.unlink(join(DESTINATION, filename), (err) => {
    if (err) throw err;
  });
};
