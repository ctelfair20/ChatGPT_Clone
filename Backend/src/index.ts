import app from "./utils/app.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 6000;

connectToDatabase().then(() => {
  app.listen(PORT, () => console.log("Server Open AND Database Connected"));

}).catch((err) => {
  console.log(`Error in index: ${err}`)
});
