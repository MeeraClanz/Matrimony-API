module.exports = (sequelize, DataTypes, Model) => {
  class Profiles extends Model {}

  Profiles.init(
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      profile_for: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      dob: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      location: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      education: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      specialization: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      job_title: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      company: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      ctc: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      caste: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      sub_caste: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      first_marraige: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      joined_family: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      class: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      parent_occupation: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      parent_number: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      Avatar_url: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      interests: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "profiles", // We need to choose the model name
    }
  );

  return Profiles;
};
