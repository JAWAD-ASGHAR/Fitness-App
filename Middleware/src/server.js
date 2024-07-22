const http = require("http"); // Import the 'http' module
const mongoose = require("mongoose");
const createApp = require("./app");

const URL =
  "mongodb+srv://abdulbasit820:ycjr98pcl@cluster0.h2gb7cy.mongodb.net/Fitness-Tracker?retryWrites=true&w=majority&appName=Cluster0";

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

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
