import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon , setFavourite ,setUnfavourite} from "../Api/PokemonApi";
import PokemonComponent from "../components/PokemonComponent";
import PokemonsEvolution from "../components/PokemonsEvolutions";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  let { id } = useParams();

  useEffect(async () => {
    const pokemon = await getPokemon(id);
    setPokemon(pokemon);
  }, [id]);

  if (!pokemon) {
    return <div>No pokemons</div>;
  }

  async function onChangeIsFavourite(){
    const pokemonIsFavourite = await setFavourite(id);
    const isFavourite = pokemonIsFavourite[isFavourite];
    setPokemon({...pokemon, isFavourite: pokemonIsFavourite});
    alert("ola");
  }

  async function onChangeIsUnfavourite(){
    const pokemonIsUnavourite = await setUnfavourite(id);
    const isFavourite = pokemonIsUnavourite[isFavourite];
    setPokemon({...pokemon, isFavourite : isFavourite});
    alert("adeus");
  }

  return (

    <div className="Pokemon">
      <PokemonComponent
        pokemon={pokemon}
        handleChangeIsFavourite={onChangeIsFavourite}
        handleChangeIsUnfavourite={onChangeIsUnfavourite}
      />
      <PokemonsEvolution pokemons={pokemon.evolutions} /> 
    </div>
  );
}

export default Pokemon;
