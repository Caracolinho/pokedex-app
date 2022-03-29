import React from "react";
import './PokemonRow.css';

const PokemonRow = props => (
    <div className="PokemonRow">
       <div className="cardImage">
       <img src ={props.pokemonImage}/>
       </div>
       <div className="cardFotter">
           <h4>{props.pokemonName}</h4>
           <p>{props.pokemonType}</p>
           <p>{props.pokemonIsFavourite.toString()}</p>
       </div>
        
    </div>
);

export default PokemonRow;
