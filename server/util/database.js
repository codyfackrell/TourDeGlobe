require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  define:{
    timestamps: false,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
});

module.exports = {
  sequelize
}
