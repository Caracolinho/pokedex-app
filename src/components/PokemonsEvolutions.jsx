import React from "react";
import "./PokemonEvolutions.css";
import Pokemon from "./Pokemon";

function PokemonsEvolution({pokemons}) {
  debugger
  if(!pokemons){
    return <div>Not pokemons evolutions</div>
  }
  return (
    <div className="PokemonsEvolutionContainer">
      <div className="PokemonsEvolutionTitle">Evolutions</div>
        {pokemons.map((pokemonEvolution, index) => {
          const { id, name, image, isFavorite } = pokemonEvolution;
          return (
            <Pokemon
              showType={false}
              key={index}
              id={id}
              image={image}
              name={name}
              isFavourite={isFavorite}
            />
          );
        })}
    </div>
  );
}

export default PokemonsEvolution;
