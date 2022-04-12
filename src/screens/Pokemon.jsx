import React, { useState, useEffect } from "react";
import { getPokemon } from "../Api/PokemonApi.js";
import PokemonComponent from "../components/PokemonComponent";

function Pokemon() {
    
    const [pokemon, setPokemon] = useState(null)

    useEffect(async () => {
        const pokemon = await getPokemon("007");
        setPokemon(pokemon);
    }, []);
    if ( !pokemon ){
      return <div>No pokemons</div>
    }

    return (
      <div className="Pokemon">   
            <PokemonComponent
              image={pokemon.image}
              sound={pokemon.sound}
              name={pokemon.name}
              types={pokemon.types}
              isFavourite={pokemon.isFavorite}
              maxCp={pokemon.maxCp}
              maxHp={pokemon.maxHp}
              weight={pokemon.weight}
              height={pokemon.height}
            />
      </div>
    );
}

export default Pokemon;


// const objet = {name:"juancho"}

// cont array = [{color:"red"},{color:"blue"},{color:"white"}]