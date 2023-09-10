const savedCountriesModel = require("../models/savedCountriesModel");
const { savedCountries } = require("../models/savedCountriesModel");

module.exports = {
  addCountry: async (req, res) => {
    try {
      const { countryCode, userId } = req.body;

      await savedCountries.create({
        countryCode,
        UserId: userId,
      });
      res.sendStatus(200);
    } catch (err) {
      console.log("Error", err);
      res.sendStatus(400);
    }
  },

  getUsersCountries: async (req, res) => {
    try {
      const { userId } = req.params;

      const savedCountriesData = await savedCountries.findAll({
        where: { UserId: userId },
      });

      const countryCodeList = savedCountriesData.map((country) => country.countryCode)

      res.status(200).send({
        countryCode: countryCodeList,
      });
    } catch (err) {
      console.log("Error", err);
      res.sendStatus(400);
    }
  },

  deleteCountry: async (req, res) => {
    try {
      const { countryCode } = req.params;
      const { userId } = req.body;

      await savedCountries.destroy({
        where: { countryCode: countryCode, UserId: userId },
      });
      res.sendStatus(200);
    } catch (err) {
      console.log("Error", err);
      res.sendStatus(400);
    }
  },
};
