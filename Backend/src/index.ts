import app from "./utils/app.js";
import { connectToDatabase } from "./db/connection.js";

connectToDatabase().then(() => {
  app.listen(4000, () => console.log("Server Open AND Database Connected"));

}).catch((err) => {
  console.log(`Error in index: ${err}`)
});
