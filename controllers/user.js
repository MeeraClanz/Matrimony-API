const fast2sms = require("fast-two-sms");
const User = require("../models/user");
const { success, error } = require("../helpers/response");
const logger = require("../helpers/logger");
const { getAccessToken } = require("../helpers/token");

//post
const createNewUser = async (req, res) => {
  logger.info("createNewUser created");

  try {
    const { mobile_number } = req.body;
    const validateUser = await User.findOne({ where: { mobile_number } });

    if (validateUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    let NewUser = new User(req.body);
    let result = await NewUser.save();

    if (result) {
      let token = getAccessToken(result);
      let output = {};
      output.id = result.id;
      output.mobile_number = result.mobile_number;
      output.otp = result.otp;
      output.token = token;
      res.status(200).json(success("CREATED", output, req.status));
    }
  } catch (err) {
    logger.error(err.message);
    res.status(500).json(error(err.message, res.statusCode));
  }
};

module.exports = { createNewUser };
