// schemas.js
const Joi = require("joi");
const schemas = {
  profilePOST: Joi.object({
    user_id: Joi.string().required(),
    name: Joi.string().required(),
    gender: Joi.string().required(),
    profile_for: Joi.string().required(),
    dob: Joi.string().required(),
    location: Joi.string().required(),
    education: Joi.string().required(),
    specialization: Joi.string().required(),
    job_title: Joi.string().required(),
    company: Joi.string().required(),
    ctc: Joi.string().required(),
    caste: Joi.string().required(),
    sub_caste: Joi.string().required(),
    first_marraige: Joi.string().required(),
    joined_family: Joi.string().required(),
    class: Joi.string().required(),
    parent_occupation: Joi.string(),
    parent_number: Joi.number(),
    class: Joi.string().required(),
    avatar_url: Joi.string(),
    interests: Joi.string(),
  }),
  profileGET: Joi.object({
    //id: Joi.string().required(),
    id: Joi.string().required(),
  }),
  // define all the other schemas below
};
module.exports = schemas;
