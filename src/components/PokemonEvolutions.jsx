import React from "react";
import "./PokemonEvolutions.css";
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const  PokemonEvolution = ({id, image , name , isFavourite}) => {

    return  (
        <div className="PokemonRowEvoluiton" /*{ onClick={()=> navigate(`/pokemons/${id}`)}}*/>
          <img className="PokemonImageEvoluiton" src={image} />
          <div className="cardFotterEvoluiton">
            <div className="textNameEvoluiton">{name}</div>
            {isFavourite ? (
              <div className="favouriteIconEvoluiton">
                <FaHeart />
              </div>
            ) : (
              <div className="favouriteIcon">
                <FaRegHeart />
              </div>
            )}
          </div>
        </div>
      );
}; 

export default PokemonEvolution;