const http = require("http"); // Import the 'http' module
const mongoose = require("mongoose");
const createApp = require("./app");
require("dotenv").config();
const URL = process.env.MONGO_URI;
const PORT = process.env.PORT;
// Connect to MongoDB
mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Create the Express app
const app = createApp();
// Create and start the HTTP server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
