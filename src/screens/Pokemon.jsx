import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon , setFavourite} from "../Api/PokemonApi";
import PokemonComponent from "../components/PokemonComponent";
import PokemonsEvolution from "../components/PokemonsEvolutions";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [isFavourite , setIsFavourite] = useState ();

  let { id } = useParams();

  useEffect(async () => {
    const pokemon = await getPokemon(id);
    setPokemon(pokemon);
  }, [id]);

  if (!pokemon) {
    return <div>No pokemons</div>;
  }

  function onChangeIsFavourite (){
    
    const pokemonIsFavourite = setFavourite (id);
    setIsFavourite(pokemonIsFavourite);
    alert("ola");
  }

  return (


    <div className="Pokemon">
      <PokemonComponent
        pokemon={pokemon}
        handleChangeIsFavourite={onChangeIsFavourite}
      />
      <PokemonsEvolution pokemons={pokemon.evolutions} /> 
    </div>
  );
}

export default Pokemon;
