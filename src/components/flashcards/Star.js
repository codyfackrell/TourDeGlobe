import React, { useContext, useState } from "react";
import CountryContext from "../../store/countryContext";
import AuthContext from "../../store/authContext";
import { AiTwotoneStar } from "react-icons/ai";

const Star = () => {
  const countryContext = useContext(AuthContext)
  const authContext = useContext(AuthContext)

    const [starSelected, setStarSelected] = useState(false) 

    const starClick = () => {
        !starSelected ? setStarSelected(true) : setStarSelected(false)
    };

  return <AiTwotoneStar className={`star ${starSelected ? "star-selected" : ""}`} onClick={starClick}/>;
};

export default Star;
