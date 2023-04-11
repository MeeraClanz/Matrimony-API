const express = require("express");
const checkReq = require("../middlewares/validate");
const router = express.Router();
const { createNewUser, signUp, signIn } = require("../controllers/user");
const verifyToken = require("../middlewares/verify.token");

router.post("/createNewUser", createNewUser);

module.exports = router;
