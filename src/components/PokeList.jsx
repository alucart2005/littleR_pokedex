import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import "./Pokelist.css"

export function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const getAllPokemons = async () => {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    ); //la api que se va a consumir
    const data = await respuesta.json(); //recepciona toda la data de respuesta en JSON
    function createPokemonObject(resuls) {
      //crear objetos para los pokemons
      resuls.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.id}
              id={pokemonStats.id.toString().padStart(3, "0")}
              name={pokemonStats.name}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
