import React, { useState, useEffect } from "react";
import {getPokemos} from '../Api/PokemonApi.js'
import Pokemon from '../components/Pokemon.js'

const defaultLimit = 10

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(async () => {
    const pokemons = await getPokemos({limit: defaultLimit, offset: offset});
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