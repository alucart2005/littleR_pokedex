import { useEffect, useState } from "react";

export function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const getAllPokemons = async () => {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    ); //la api que se va a consumir
    const data = await respuesta.json(); //recepciona toda la data de respuesta en JSON
    function createPokemonObject(resuls) { //crear objetos para los pokemons
      resuls.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        )
      });
    }
  };
  return <h1>Hi PokeList</h1>;
}
