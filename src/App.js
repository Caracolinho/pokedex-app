import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
 
import './App.css';

const pokemons = [
  {
    id: "001",
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Bulbasaur",
    classification: "Seed Pokemon",
    type: ["Grass","Poison"],
    isFavorite: true
  },
  {
    id: "001",
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Bulbasaur",
    classification: "Seed Pokemon",
    type: ["Grass","Veneno","Mentol"],
    isFavorite: true
  },
  {
    id: "001",
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Bulbasaur",
    classification: "Seed Pokemon",
    type: ["Grass"],
    isFavorite: true
  },
  {
    id: "001",
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: "Bulbasaur",
    classification: "Seed Pokemon",
    type: ["Grass","Veneno","Fogo","Silva"],
    isFavorite: true
  }
 
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
            types={pokemon.type}
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
