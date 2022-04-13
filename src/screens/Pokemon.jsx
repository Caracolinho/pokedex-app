import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../Api/PokemonApi";
import PokemonComponent from "../components/PokemonComponent";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  let { id } = useParams();

  useEffect(async () => {
    const pokemon = await getPokemon(id);
    setPokemon(pokemon);
  }, []);
  if (!pokemon) {
    return <div>No pokemons</div>;
  }

  return (
    <div className="Pokemon">
      <PokemonComponent
        image={pokemon.image}
        sound={pokemon.sound}
        name={pokemon.name}
        types={pokemon.types}
        isFavourite={pokemon.isFavorite}
        maxCP={pokemon.maxCP}
        maxHP={pokemon.maxHP}
        weight={pokemon.weight}
        height={pokemon.height}
      />
    </div>
  );
}

export default Pokemon;

// const objet = {name:"juancho"}

// cont array = [{color:"red"},{color:"blue"},{color:"white"}]
