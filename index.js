const express = require("express");
const cors = require("cors");
const test = require("./routes/test");
const compression = require("compression");
const db = require("./database");
const helmet = require("helmet");
const user = require("./routes/user");
const profile = require("./routes/profile");
const User = require("./models/user");
const Profile = require("./models/profile");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// Synchronize the Profile model with the database

Profile.sync({ alter: true })
  .then(() => {
    console.log("Profile table synced successfully");
  })
  .catch((err) => {
    console.log("Error syncing Profile table", err);
  });

User.sync({ alter: true })
  .then(() => {
    console.log("User table synced successfully");
  })
  .catch((err) => {
    console.log("Error syncing Payslip table", err);
  });

app.use("/api", test);
app.use("/api", profile);
app.use("/api", user);

process.on("unhandledRejection", (err) => console.log("Error:", err));

db.authenticate()
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(3000, () => {
      console.log(`Server Started at ${3000}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
