import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Main function to start the server
async function main() {
  try {
    // Connect to the database
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    // Handle any errors that occur during the connection process
    console.error("Unable to connect to the database:", error);
  }
}

// Start the server
main();
