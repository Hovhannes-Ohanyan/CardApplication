import React, { useState } from "react";
import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCardNumber = Math.floor(Math.random() * 1000); // Generate a random number
    setCards([...cards, newCardNumber]);
  };

  const sortCards = () => {
    const sortedCards = [...cards].sort((a, b) => a - b); // Sort cards in ascending order
    setCards(sortedCards);
  };

  const deleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="App">
      <div className="left">
        <Header addCard={addCard} sortCards={sortCards} />
        <Main cards={cards} deleteCard={deleteCard} />
        <Footer />
      </div>
      <div className="right">
        <Instructions />
      </div>
    </div>
  );
}

export default App;
