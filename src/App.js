import "./styles/App.css";
import Card from "./components/Card";
import Img from "./components/Img";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState(
    [
      { id: 1, img: Img[0], stat: "" },
      { id: 1, img: Img[0], stat: "" },
      { id: 2, img: Img[1], stat: "" },
      { id: 2, img: Img[1], stat: "" },
      { id: 3, img: Img[2], stat: "" },
      { id: 3, img: Img[2], stat: "" },
      { id: 4, img: Img[3], stat: "" },
      { id: 4, img: Img[3], stat: "" },
      { id: 5, img: Img[4], stat: "" },
      { id: 5, img: Img[4], stat: "" },
      { id: 6, img: Img[5], stat: "" },
      { id: 6, img: Img[5], stat: "" },
      { id: 7, img: Img[6], stat: "" },
      { id: 7, img: Img[6], stat: "" },
      { id: 8, img: Img[7], stat: "" },
      { id: 8, img: Img[7], stat: "" },
      { id: 9, img: Img[8], stat: "" },
      { id: 9, img: Img[8], stat: "" },
      { id: 10, img: Img[9], stat: "" },
      { id: 10, img: Img[9], stat: "" },
      { id: 11, img: Img[10], stat: "" },
      { id: 11, img: Img[10], stat: "" },
      { id: 12, img: Img[11], stat: "" },
      { id: 12, img: Img[11], stat: "" },
      { id: 13, img: Img[12], stat: "" },
      { id: 13, img: Img[12], stat: "" },
      { id: 14, img: Img[13], stat: "" },
      { id: 14, img: Img[13], stat: "" },
      { id: 15, img: Img[14], stat: "" },
      { id: 15, img: Img[14], stat: "" },
      { id: 16, img: Img[15], stat: "" },
      { id: 16, img: Img[15], stat: "" },
      { id: 17, img: Img[16], stat: "" },
      { id: 17, img: Img[16], stat: "" },
      { id: 18, img: Img[17], stat: "" },
      { id: 18, img: Img[17], stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (cards[current].id == cards[prev].id) {
      cards[current].stat = "correct";
      cards[prev].stat = "correct";
      setCards([...cards]);
      setPrev(-1);
    } else {
      cards[current].stat = "wrong";
      cards[prev].stat = "wrong";
      setCards([...cards]);
      setTimeout(() => {
        cards[current].stat = "";
        cards[prev].stat = "";
        setCards([...cards]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      cards[id].stat = "active";
      setCards([...cards]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="App">
      <div className="board">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              id={index}
              img={card.img}
              stat={card.stat}
              handleClick={handleClick}
            />
          );
        })}

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  */}
      </div>
    </div>
  );
}

export default App;
