const logger = require("../helpers/logger");
const { success, error } = require("../helpers/response");
const Profile = require("../models/Profile");

//getAll

const getAllProfile = async (req, res) => {
  logger.info("Get all Profile Called");
  try {
    let result = await Profile.findAll();
    res.status(200).json(success("OK", result, res.status));
  } catch (err) {
    logger.error(err.message);
    res.status(500).json(error(err.message, res.status));
  }
};

//getByID
const getProfileById = async (req, res) => {
  logger.info("Get Profile by Id Called");
  try {
    const data = await Profile.findOne({ id: req.params.id });
    res.status(200).json(success("OK", data, res.statusCode));
  } catch (err) {
    logger.error(err.message);
    res.status(500).json(error(err.message, res.statusCode));
  }
};

//post
const createProfile = async (req, res) => {
  logger.info("Profile created");
  try {
    const { user_id } = req.body;
    const validate = await Profile.findOne({ where: { user_id } });
    if (validate) {
      return res
        .status(400)
        .json({ message: "This user_id already has account" });
    }

    let newProfile = new Profile(req.body);
    let result = await newProfile.save();
    res.status(201).json(success("CREATED", result, req.statusCode));
  } catch (err) {
    logger.error(err.message);
    res.status(500).json(error(err.message, res.status));
  }
};

//update
const updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { returning: true, where: { id } };
    const result = await Profile.update(updatedData, options);
    res.status(200).json(success("Updated", result, res.status));
  } catch (err) {
    res.status(500).json(error(err.message, res.status));
  }
};

//delete
const deleteProfile = async (req, res) => {
  try {
    const id = req.params.id;
    //const result = await Profile.destroy(id);
    const result = await Profile.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(success("Deleted", result, res.status));
  } catch (err) {
    res.status(500).json(error(err.message, res.status));
  }
};

module.exports = {
  createProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
};
