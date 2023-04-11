const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./user");

const Profile = sequelize.define(
  "Profile",
  {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   primaryKey: true,
    //   allowNull: false,
    // },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
        allowNull: false,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_for: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ctc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caste: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_caste: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_marraige: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    joined_family: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interests: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "profiles",
  }
);

module.exports = Profile;
