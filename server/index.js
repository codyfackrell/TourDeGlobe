const { sequelize } =require('./util/database');
const { Users } = require("./models/users");
const { savedCountries } = require("./models/savedCountries");

require('dotenv').config()
const {PORT} = process.env;

const express = require("express");
const cors = require("cors");

const { register, login } = require('./controllers/auth');
const { addCountry, getUsersCountries, deleteCountry } = require('./controllers/savedCountries');

Users.hasMany(savedCountries);
savedCountries.belongsTo(Users);

const app = express();

app.use(express.json());
app.use(cors());

/* --------   Authentication Endpoints  --------  */

app.post('/register', register);
app.post('/login', login);

/* --------   Saved Countries Endpoints   --------  */

app.get('/saved-countries/:userId', getUsersCountries)
app.post('/saved-countries/:id', addCountry)
app.delete('/saved-countries/:id', deleteCountry)


sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
})
    .catch((err) => console.log(err))
