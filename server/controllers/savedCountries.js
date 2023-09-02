module.exports = {
  addCountry: async (req, res) => {
    console.log("addCountry");
    res.sendStatus(200);
  },

  getUsersCountries: async (req, res) => {
    console.log("getUsersCountries");
    res.sendStatus(200);
  },

  deleteCountry: async (req, res) => {
    console.log("removeCountry");
    res.sendStatus(200);
  },
};
