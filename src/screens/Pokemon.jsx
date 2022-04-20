import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../Api/PokemonApi";
import PokemonComponent from "../components/PokemonComponent";
import PokemonEvolutions from "../components/PokemonEvolutions";
import InfiniteScroll from "react-infinite-scroll-component";

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
      <InfiniteScroll
        dataLength={0}
        next={0}
        style={{display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column'}}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv">
        {pokemon.map((pokemon, index) => (
          <PokemonEvolutions
            key ={index}
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            isFavourite={pokemon.isFavorite}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Pokemon;


