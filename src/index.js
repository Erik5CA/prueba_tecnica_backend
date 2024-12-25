import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/user.model.js";

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
