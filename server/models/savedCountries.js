const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  savedCountries: sequelize.define("savedCountries", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    countryCode: DataTypes.STRING,
  }),
};
