require("dotenv").config();

const { Users } = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET_KEY,
    {
      expiresIn: "2 days",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { firstName, homeCountry, username, password } = req.body;
      const foundUser = await Users.findOne({ where: { username: username } });

      if (foundUser) {
        res.status(400).send("User already exists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await Users.create({
          firstName: firstName,
          homeCountry: homeCountry,
          username: username,
          hashedPass: hash,
        });

        const token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );

        const exp = Date.now() + 1000 * 60 * 60 * 48;
      
        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token: token,
          exp: exp,
        });
      }
    } catch (error) {
      res.sendStatus(400);
      console.log("Error", error);
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const foundUser = await Users.findOne({ where: { username: username } });

      if(foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashedPass
        );
        if(isAuthenticated) {
          const token = createToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 48;

          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.id,
            homeCountry: foundUser.dataValues.homeCountry,
            token: token,
            exp: exp,
          });
        } else {
          res.status(400).send("Cannot Log In");
        }
      } else {
        res.status(400).send("User does not exist");
      } 
    } catch(err) {
      res.sendStatus(400);
      console.log('Error', err)
    }
  },
};
