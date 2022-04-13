import React, { Component } from 'react'
import Pokemons from './screens/Pokemons'
import Pokemon from './screens/Pokemon'
import NotFound from './screens/NotFound'
import './App.css'

class App extends Component {

  pathname = window.location.pathname


  getPage = () => {
    if (this.pathname === "/pokemons") {
      return <Pokemons/>
    }
    if(this.pathname === "/pokemon") {
      return <Pokemon/>
    }
    return <Pokemon/>
  }

  render() {
    
    
    return (
      <div className="App">
        <div>
          {this.getPage()}
        </div>
      </div>
    );
  }
}

export default App;

