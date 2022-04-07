import React, { useState, useEffect } from "react";
import { getPokemos } from "../Api/PokemonApi.js";
import Pokemon from "../components/Pokemon.js";
import InfiniteScroll from "react-infinite-scroll-component";

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
      offset: pokemons.length  ,
    });
    setPokemons([...pokemons, ...newPokemons]);
  }
  
  return (
    <div className="Pokemons">
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchMoreData}
        style={{display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row'}}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {pokemons.map((pokemon, index) => (
          <Pokemon
            key={index}
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

// Example

{
  /* <InfiniteScroll
dataLength={this.state.items.length}
next={this.fetchMoreData}
style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
inverse={true} //
hasMore={true}
loader={<h4>Loading...</h4>}
scrollableTarget="scrollableDiv"
>
{this.state.items.map((_, index) => (
  <div style={style} key={index}>
    div - #{index}
  </div>
))}
</InfiniteScroll> */
}

export default Pokemons;
