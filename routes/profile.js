const express = require("express");
const checkReq = require("../middlewares/validate");
const router = express.Router();
const {
  getProfileById,
  updateProfile,
  deleteProfile,
  getAllProfile,
  createProfile,
} = require("../controllers/profile");
const { profilePOST, profileGET } = require("../schemas/profile");

//Create new record Method
router.post("/profile", checkReq(profilePOST, "body"), createProfile);

//Get all Method
router.get("/profile", getAllProfile);

//Get by ID Method
// router.get("/profile/:id", checkReq(profileGET, "params"), getProfileById);

//Update by ID Method
router.patch("/profile/:id", updateProfile);

//Delete by ID Method
router.delete("/profile/:id", deleteProfile);

module.exports = router;
