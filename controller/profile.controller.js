const profileRepository = require("../repository/profile.respository");
const logger = require("../logger/api.logger");

class NewEntryController {
  async getProfiles() {
    logger.info("Controller: getProfiles");
    return await profileRepository.getProfiles();
  }

  async createProfile(profile) {
    logger.info("Controller: createProfile", profile);
    return await profileRepository.createProfile(profile);
  }

  async updateProfile(profile) {
    logger.info("Controller: updateProfile", profile);
    return await profileRepository.updateProfile(profile);
  }

  async deleteProfile(profileId) {
    logger.info("Controller: deleteProfile", profileId);
    return await profileRepository.deleteProfile(profileId);
  }
}
module.exports = new NewEntryController();
