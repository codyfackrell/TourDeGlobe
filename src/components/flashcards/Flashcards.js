import React from "react";
import DisplayedFlashcard from "./DisplayedFlashcard";

const Flashcards = () => {
  return (
    <>
      <h2>What country is this?</h2>
      <DisplayedFlashcard/>
      <div className="flashcard second"></div>
      <div className="flashcard third" />
    </>
  );
};

export default Flashcards;
