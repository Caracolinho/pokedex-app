function getPokemos({ limit, offset }) {
  const pokemonQuery = `
        query PokemonsList($limit: Int , $offset: Int){
            pokemons(query: { limit: $limit, offset: $offset, search: "" }) {
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
        variables: { limit, offset },
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

function setFavourite(id, isFavorite) {
  const favoriteQuery = `
  mutation setFavourite($id: ID!) {
    favoritePokemon (id: $id){
      isFavorite
      }
    }
    `;

  const unFavoriteQuery = `
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
        query: isFavorite ? favoriteQuery : unFavoriteQuery,
        variables: { id },
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data[
        isFavorite ? "favoritePokemon" : "unFavoritePokemon"
      ];
    });
}

export { getPokemos, getPokemon, setFavourite };
