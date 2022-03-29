import React, { Component } from 'react';
import PokemonRow from './components/PokemonRow'
import './App.css';

const pokemons = [
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Charizard",
    type: "Fire",
    isFavorite: true
  },
  {
    image: "pepe.png",
    name: "Pepe",
    type: "Water",
    isFavorite: false
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokemon App Hi!</h1>
        <>{pokemons.map((pokemon , index) => (
           <PokemonRow
            key={index}
            pokemonImage={pokemon.image}
            pokemonName={pokemon.name}
            pokemonType={pokemon.type}
            pokemonIsFavourite={pokemon.isFavorite}
          />
        ))}
        </>
      </div>
    );
  }
}

export default App;
