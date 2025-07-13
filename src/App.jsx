import { useEffect, useState } from "react";
import Counter from "./Counter"; 
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/azkar.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards.slice(0, 30)); // نعرض أول 30 ذكر فقط
      });
  }, []);

  return (
    <div>
      <header className="main-header">
        <h1>أذكار المسلم</h1>
        <p className="subtitle">omar jbour — ID: 221148</p>
      </header>

      <div className="cards-container">
        {cards.map((card) => (
          <Counter
            key={card.id}
            title={card.title}
            numoftries={card.count}
            backcolor={card.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
