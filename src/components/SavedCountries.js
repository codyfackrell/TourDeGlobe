import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DisplayedFlashcard from "./flashcards/DisplayedFlashcard";
import AuthContext from "../store/authContext";

const SavedCountries = () => {
  const authContext = useContext(AuthContext);
  const userId = authContext.userId;

  const [usersCountries, setUsersCountries] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/saved-countries/${userId}`).then((res) => {
      setUsersCountries(res.data);
    });
  });

  return (
    <>
      <h2>Practice the countries you want to master!</h2>
      <DisplayedFlashcard />
      <div className="flashcard second"></div>
      <div className="flashcard third" />
    </>
  );
};

export default SavedCountries;
