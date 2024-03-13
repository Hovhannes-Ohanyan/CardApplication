import React from "react";
import Card from "../Card/Card";
import "./Main.css";

const Main = ({ cards, deleteCard }) => {
  return (
    <main className="main">
      <div className="cardContainer">
        {cards.map((card, index) => (
          <Card key={index} number={card} onDelete={() => deleteCard(index)} />
        ))}
      </div>
    </main>
  );
};

export default Main;
