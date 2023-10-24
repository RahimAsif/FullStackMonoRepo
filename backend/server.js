// Require needed modules.
const express = require("express");
const cors = require("cors");

// Initialize the app
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Home Route
app.get("/", function (req, res) {
  res.send("Home Route");
});

// About Route
app.get("/about", function (req, res) {
  const info = {
    author: "Muhammad Rahim",
    description: "Basic Node/Express Server app",
  };

  res.json(info);
});

// Listen for connections.
app.listen(process.env.PORT, function () {
  console.log(`Node/Express server is running on ${process.env.PORT}`);
});
