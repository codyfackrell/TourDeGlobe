import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";

const Star = () => {
    const [starSelected, setStarSelected] = useState(false) 

    const starClick = () => {
        !starSelected ? setStarSelected(true) : setStarSelected(false)
    };

  return <AiTwotoneStar className={`star ${starSelected ? "star-selected" : ""}`} onClick={starClick}/>;
};

export default Star;
