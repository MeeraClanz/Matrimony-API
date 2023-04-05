const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const profileController = require("./controller/profile.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//profile
app.get("/api/profiles", (req, res) => {
  profileController.getProfiles().then((data) => res.json(data));
});

app.post("/api/profile", (req, res) => {
  console.log(req.body);
  profileController
    .createProfile(req.body.profile)
    .then((data) => res.json(data));
});

app.put("/api/profile", (req, res) => {
  profileController
    .updateProfile(req.body.profile)
    .then((data) => res.json(data));
});

app.delete("/api/profile/:id", (req, res) => {
  profileController.deleteProfile(req.params.id).then((data) => res.json(data));
});

app.get("/", (req, res) => {
  res.send(`<h1>API Works !!!</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
