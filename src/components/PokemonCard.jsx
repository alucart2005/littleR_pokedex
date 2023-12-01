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
          <img src={image} alt={name} />
          <div style={{ display: "flex", width: "100%" }}>
            <div className="stats-left">
              <p>type</p>
              <p>weight</p>
              <p>height</p>
            </div>
            <div className="stats-right" style={{ background: "purple" }}>
              <p>{type}</p>
              <p>{weight} Lbs</p>
              <p>{height}0 Cm</p>
            </div>
          </div>
          <div className="base-stats">
            <div>
              {statsName.map((stats) => (
                <div className="stats">{stats}</div>
              ))}
            </div>
            <div>
              {stats.map((stats) => (
                <p className="stats">{ stats}</p>
              ))}
            </div>
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
        <p style={{ width: "270px" }}>No. {id}</p>
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
