import React, { useState, useEffect } from "react";
import { getPokemos } from "../Api/PokemonApi";
import Pokemon from "../components/Pokemon";
import InfiniteScroll from "react-infinite-scroll-component";
import FilterComponent  from "../components/FilterComponent";

const defaultLimit = 12;
const offset = 0

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const pokemons = await getPokemos({ limit: defaultLimit, offset: offset });
    setPokemons(pokemons);
  }, []);

  async function fetchMoreData() {
    const newPokemons = await getPokemos({
      limit: defaultLimit,
      offset: pokemons.length,
    });
    setPokemons([...pokemons, ...newPokemons]);
  }
  
  return (
    <div className="Pokemons">
      <div>
        <FilterComponent/>
      </div>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchMoreData}
        style={{display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row'}}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv">
       {pokemons.map((pokemon, index) => (
          <Pokemon
            key ={index}
            id={pokemon.id} 
            image={pokemon.image}
            name={pokemon.name}
            types={pokemon.types}
            isFavourite={pokemon.isFavorite}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Pokemons;
