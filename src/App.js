import React, { Component } from 'react'
import Pokemons from './screens/Pokemons'
import Pokemon from './components/PokemonComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon/>
        <Pokemons/> 

        
      </div>
    );
  }
}

export default App;

