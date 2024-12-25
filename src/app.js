import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/static", express.static("uploads"));

app.use("/api/users", userRoutes);

export default app;