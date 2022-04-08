import React, { Component } from 'react'
import Pokemons from './screens/Pokemons'
import PokemonsComponent from './components/PokemonComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemons handelClick = {() =>{
          <PokemonsComponent/>
        }}/>
      </div>
    );
  }
}

export default App;

