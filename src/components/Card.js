import React from "react";
import "../styles/App.css";
function Card({ img, id, stat, handleClick, key }) {
  const itemClass = stat ? " active " + stat : "";

  return (
    <div className="card-outer">
      <div className={"card" + itemClass} onClick={() => handleClick(id)}>
        {/* <div className="front"></div>
        <div className="back"></div> */}
        <img src={img} alt="gameImg" />
      </div>
    </div>
  );
}

export default Card;
