import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/user.model.js";

// Main function to start the server
async function main() {
  try {
    // Connect to the database
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    // Handle any errors that occur during the connection process
    console.error("Unable to connect to the database:", error);
  }
}

// Start the server
main();
