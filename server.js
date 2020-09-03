const express = require("express");
require('dotenv').config()

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dreamtimedesigns", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  });

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
