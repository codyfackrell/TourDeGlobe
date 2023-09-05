const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Users: sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    homeCountry: DataTypes.STRING,
    username: DataTypes.STRING,
    hashedPass: DataTypes.STRING,
  }),
};
