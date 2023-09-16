import React, { useState, createContext } from "react";
import axios from "axios";
import initialCountry from "../assets/initialCountry";

const CountryContext = createContext();

export function CountryProvider(props) {
  const [randomCountry, setRandomCountry] = useState(initialCountry);
  const [countryCode, setCountryCode] = useState("");
  const [usersCountryCodes, setUsersCountryCodes] = useState([])

  const retrieveCountry = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      const random = Math.floor(Math.random(res.data) * res.data.length);
      setRandomCountry(res.data[random]);
      setCountryCode(res.data[random].cca2);
    });
  };

  const retrieveUsersCountries = async () => {
    const userId = localStorage.getItem("userId");
    const getUsersSavedCountryCodes = await axios.get(`http://localhost:4000/saved-countries/${userId}`)
    const userCountryCodeList = getUsersSavedCountryCodes.data.countryCode;
    setUsersCountryCodes(userCountryCodeList)

    
    if(userCountryCodeList.length === 0) {
      return
    } else {
      const random = Math.floor(Math.random(userCountryCodeList) * userCountryCodeList.length);
      const countryCode = userCountryCodeList[random];

      axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`).then((res) => {
        setRandomCountry(res.data[0])
        setCountryCode(res.data[0].cca2)
      })
    }

  };

  console.log(countryCode)

  const contextValue = {
    randomCountry,
    countryCode,
    usersCountryCodes,
    retrieveCountry,
    retrieveUsersCountries,
  };

  return (
    <CountryContext.Provider value={contextValue}>
      {props.children}
    </CountryContext.Provider>
  );
}

export default CountryContext;
