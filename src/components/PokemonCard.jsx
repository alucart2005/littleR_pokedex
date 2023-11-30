import "./PokemonCard.css"

export function PokemonCard({ id, name, image, type, weight, height, stats, statsName }) {
  return (
    <div className="container">
      <div className="show">
        <div className="stat-container-title">
          <p>{name}</p>
          <img src={image} alt={name} className="img-litle" />
        </div>
      </div>
    </div>
  );
}
