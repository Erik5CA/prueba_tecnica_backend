import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import { DESTINATION } from "./middleware/file.middleware.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
// Enable JSON parsing
app.use(express.json());
// Enable CORS
app.use(cors());

// Serve static files from the uploads folder
app.use("/static", express.static(DESTINATION));

// Routes for the API
app.use("/api/users", userRoutes);

export default app;
