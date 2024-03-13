import React from "react";
import "./Header.css";

const Header = ({ addCard, sortCards }) => {
  return (
    <header className="header">
      <button onClick={addCard} className="btn">Add Card</button>
      <button onClick={sortCards} className="btn">Sort Cards</button>
    </header>
  );
};

export default Header;
