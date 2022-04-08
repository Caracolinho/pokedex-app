import React from "react";
import "./pokemonComponent.css";
import { FaRegHeart , FaHeart } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";


    const pokemon = [
      {
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        sound:"",
        name: "Charizard",
        type: "Fire",
        isFavorite: true,
        maxCp:12,
        maxHp:24,
        weight:"7kg",
        height:"10m",
      }
    ]

    const PokemonComponent = ({ image , sound , name , types, isFavourite ,
         maxCp , maxHp , weight , height }) => {

        return (
          <div className = "PokemonComponent">
            <div  className = "PokemonHeader">
                <img className = "PokemonImage" src={image} />
                <div className = "Pokemonsound"><GiSpeaker{...sound}/></div>
            </div>    
            <div className = "PokemonBody">
                <div className = "PokemonName">{name}</div>
                <div className = "PokemonTypes">
                  {/*{typesTextTransformation(types)} */}
                  {types}</div>
                {isFavourite ? (<div className="favouriteIcon"><FaHeart /></div>) : (<div className="favouriteIcon"><FaRegHeart /></div>)}
                <div className = "PokemonCp">{maxCp}</div> 
                <div className = "PokemonHp">{maxHp}</div> 
            </div>
            <div className = "PokemonBodyWeight">
                <div className = "PokemonWeight">{weight}</div> 
            </div>
            <div className = "PokemonBodyHeight">
                <div className = "PokemonHeight">{height}</div> 
            </div>
          </div>
        );
    }; 

export default PokemonComponent;