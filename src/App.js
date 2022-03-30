import React, { Component } from 'react';
import Pokemon from './components/Pokemon'
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
  }
  // {
  //   image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  //   name: "Charizard",
  //   type: "Fire",
  //   isFavorite: true
  // },
  // {
  //   image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  //   name: "Charizard",
  //   type: "Fire",
  //   isFavorite: true
  // },
  // {
  //   image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  //   name: "Charizard",
  //   type: "Fire",
  //   isFavorite: true
  // },
  // {
  //   image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  //   name: "Charizard",
  //   type: "Fire",
  //   isFavorite: true
  // },
  // {
  //   image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  //   name: "Charizard",
  //   type: "Fire",
  //   isFavorite: true
  // },
  // {
  //   image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  //   name: "Charizard",
  //   type: "Fire",
  //   isFavorite: true
  // },
  // {
  //   image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  //   name: "Charizard",
  //   type: "Fire",
  //   isFavorite: true
  // }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Pokemons">
        <>{pokemons.map((pokemon , index) => (
           <Pokemon
            key={index}
            image={pokemon.image}
            name={pokemon.name}
            type={pokemon.type}
            isFavourite={pokemon.isFavorite}
          />
        ))}
        </>
        </div>
      </div>
    );
  }
}

export default App;
