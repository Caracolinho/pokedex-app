import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
import {getPokemos} from './Api/PokemonApi'
import './App.css';

const pokemons = getPokemos()

debugger

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
