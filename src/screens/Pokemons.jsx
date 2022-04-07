import React, { useState, useEffect } from "react";
import {getPokemos} from '../Api/PokemonApi.js'
import Pokemon from '../components/Pokemon.js'

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const pokemons = await getPokemos();
    setPokemons(pokemons);
  }, []);

  return (
    <div className="Pokemons">
      <>
        {pokemons.map((pokemon, index) => (
          <Pokemon
            key={index}
            image={pokemon.image}
            name={pokemon.name}
            types={pokemon.types}
            isFavourite={pokemon.isFavorite}
          />
        ))}
      </>
    </div>
  );
}

export default Pokemons