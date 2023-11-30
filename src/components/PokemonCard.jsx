import "./PokemonCard.css";
import pokeball from "../img/pokeball.png";
import { useState } from "react";

export function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <p>{name}</p>
            <img src={image} alt={name} className="img-litle" />
          </div>
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src={image}
          alt={name}
          style={{
            maxHeight: "50px",
            marginRight: "10px",
            width: "50px",
          }}
        />
        <p style={{ width: "270px"}}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
    </div>
  );
}
