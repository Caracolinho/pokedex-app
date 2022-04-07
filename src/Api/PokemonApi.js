 function getPokemos({limit , offset}) {
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
        variables: {limit , offset},
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data.pokemons.edges;
    });
}

export { getPokemos };
