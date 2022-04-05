import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
import {getPokemos} from './Api/PokemonApi'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pokemons: []};
  }

  async componentDidMount() {
    const pokemons = await getPokemos()
    this.setState({
      pokemons
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Pokemons">
        <>{this.state.pokemons.map((pokemon , index) => (
           <Pokemon 
            key={index}
            image={pokemon.image}
            name={pokemon.name}
            types={pokemon.types}
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
