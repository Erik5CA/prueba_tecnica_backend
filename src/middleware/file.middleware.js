import multer from "multer";
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Get the current directory
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
// Define the destination folder
export const DESTINATION = join(CURRENT_DIR, "../uploads");

// Define the storage middleware
export const storage = multer({
  storage: multer.diskStorage({
    destination: DESTINATION,
    filename: (req, file, cb) => {
      const fileName = Date.now() + file.originalname;
      cb(null, fileName);
    },
  }),
});
