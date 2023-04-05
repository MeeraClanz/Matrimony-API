const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class ProfileRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getProfiles() {
    try {
      const profiles = await this.db.profiles.findAll();
      console.log("profiles:::", profiles);
      return profiles;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createProfile(profile) {
    let data = {};
    try {
      profile.createdate = new Date().toISOString();
      data = await this.db.profiles.create(profile);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateProfile(profile) {
    let data = {};
    try {
      profile.updateddate = new Date().toISOString();
      data = await this.db.profiles.update(
        { ...profile },
        {
          where: {
            id: profile.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteProfile(profileId) {
    let data = {};
    try {
      data = await this.db.profiles.destroy({
        where: {
          id: profileId,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new ProfileRepository();
