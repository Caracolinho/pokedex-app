import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon, setFavourite, setUnfavourite } from "../Api/PokemonApi";
import PokemonComponent from "../components/PokemonComponent";
import PokemonsEvolution from "../components/PokemonsEvolutions";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  let { id } = useParams();

  useEffect(async () => {
    const pokemon = await getPokemon(id);
    setPokemon(pokemon);
  }, [id]);

  async function onChangeIsFavourite() {
    const { isFavorite } = await setFavourite(id, !pokemon.isFavorite);
    setPokemon({ ...pokemon, isFavorite });
  }

  if (!pokemon) {
    return <div>No pokemons</div>;
  }

  return (
    <div className="Pokemon">
      <PokemonComponent
        pokemon={pokemon}
        handleChangeIsFavourite={onChangeIsFavourite}
        handleChangeIsUnfavourite={onChangeIsFavourite}
      />
      <PokemonsEvolution pokemons={pokemon.evolutions} />
    </div>
  );
}

export default Pokemon;
