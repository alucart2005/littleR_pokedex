import "./TopBar.css";
import pokeball from "../img/pokeball.png";
import pokeballcolor from "../img/pokeballcolor.png";

export function TopBar() {
  return (
    <div className="title">
      <div className="title__left">
        <p>pokedex</p>
        <div className="caugth-seen">
          <div className="caugth">
            <img
              src={pokeballcolor}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
        {/* <p style={{ display: "flex", fontSize: "1rem", fontWeight: "100", color: "white" }}>
          A-&gt;Z
        </p> */}
      </div>
    </div>
  );
}
