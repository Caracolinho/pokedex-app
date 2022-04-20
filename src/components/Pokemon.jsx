import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Pokemon.css";

function typesTextTransformation(types) {

  const initialValue = "";

  const textTypes = types.reduce(
    (previousValue, currentValue, currentIndexOptional) => {
      currentValue = !isLatest(currentIndexOptional, types.length)
        ? `${currentValue}, `
        : currentValue;
      return `${previousValue}${currentValue}`;
    },
    initialValue
  );
  return textTypes;
}

function isLatest(current, collection) {
  return current + 1 === collection;
}

const Pokemon = ({ id, image, name, types, isFavourite , showType = true }) => {

  const navigate = useNavigate();

  return (
    <div className="PokemonRow" onClick={()=> navigate(`/pokemons/${id}`)}>
      <img className="PokemonImage" src={image} />
      <div className="cardFotter">
        <div className="textName">{name}</div>
        <div className="textType">{typesTextTransformation(types)}</div>
        {isFavourite ? (
          <div className="favouriteIcon">
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

export default Pokemon;
