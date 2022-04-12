import React, { Component } from 'react'
import Pokemons from './screens/Pokemons'
import Pokemon from './screens/Pokemon'
import './App.css'

class App extends Component {

  pathname = window.location.pathname

  render() {

    return (
      <div className="App">
        <div>
          {this.pathname === "/pokemons" ? <Pokemons/> : <Pokemon/>}
        </div>
      </div>
    );
  }
}

export default App;

