function getPokemos({ limit, offset, search, filter }) {
  const pokemonQuery = `
  query PokemonsList($limit: Int , $offset: Int , $search: String  , $filter: PokemonFilterInput){
    pokemons(query: { limit: $limit, offset: $offset, search: $search  , filter:$filter}) {
        limit
        offset
        count
        edges {
            id
            name
            types
            isFavorite
            image
        }
    }
}
      `;

  return window
    .fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { limit, offset, search , filter },
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data.pokemons.edges;
    });
}

function getPokemon(id) {
  const pokemonQuery = `
  query PokemonDetails($id: ID!){
    pokemonById(
      id:$id
    ){
      id
      name
      image
      types
      sound
      isFavorite
      maxCP
      maxHP
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      evolutions{
        id
        name
        image
        isFavorite
      }
    }
  }    
      `;

  return window
    .fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { id },
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data.pokemonById;
    });
}

function setFavourite(id) {
  const pokemonQuery = `
  mutation setFavourite($id: ID!) {
    favoritePokemon (id: $id){
      isFavorite
      }
    }
    `;

  return window
    .fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { id },
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data.favoritePokemon;
    });
}

function setUnfavourite(id) {
  const pokemonQuery = `
    mutation setUnfavourite($id: ID!){
      unFavoritePokemon (id: $id){
        isFavorite
        }
    }
    `;

  return window
    .fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { id },
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data.unFavoritePokemon;
    });
}

function allTypes() {
  const pokemonQuery = `
  query{
    pokemonTypes
  }
  `;
  return window
    .fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: pokemonQuery,
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data.pokemonTypes;
    });
}

export { getPokemos, getPokemon, setFavourite, setUnfavourite, allTypes };
