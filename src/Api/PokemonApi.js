function getPokemos() {

  const pokemonQuery = `
        query {
            pokemons(query: { limit: 24, offset: 0, search: "" }) {
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
      }),
    })
    .then((r) => r.json())
    .then((response) => {
      return response.data.pokemons.edges;
    });
}

export { getPokemos };
