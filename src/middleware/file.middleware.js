import multer from "multer";
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
export const DESTINATION = join(CURRENT_DIR, "../uploads");

// delete upload folder before starting the server
if (fs.existsSync(DESTINATION)) {
  fs.rmSync(DESTINATION, { recursive: true, force: true });
}

export const storage = multer({
  storage: multer.diskStorage({
    destination: DESTINATION,
    filename: (req, file, cb) => {
      const fileName = Date.now() + file.originalname;
      cb(null, fileName);
    },
  }),
});
