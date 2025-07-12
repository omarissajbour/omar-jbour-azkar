import { useEffect, useState } from "react";
import Counter from "./Counter"; 
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  <h1>omar jbour id : 221148</h1>

  useEffect(() => {
    fetch("/azkar.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards.slice(0, 30)); // نعرض أول 6 أذكار فقط
      });
  }, []);

  return (
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
  );
}


export default App;
