const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Routes = require("./routes");
function createApp() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  Routes(app);
  return app;
}

module.exports = createApp;
