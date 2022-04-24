import React from "react";
import { useNavigate } from "react-router-dom";
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

const Pokemon = ({ id, image, name, types, isFavourite, showType = true },handleChangeIsFavourite) => {
  const navigate = useNavigate();

  return (
    <div className="PokemonRow" onClick={() => navigate(`/pokemons/${id}`)}>
      <img className="PokemonImage" src={image} />
      <div className="cardFotter">
        <div className="textName">{name}</div>
        {showType ? (
          <div className="textType">{typesTextTransformation(types)}</div>
        ) : null}
        {isFavourite ? (
          <button className="favouriteIcon">
              <FaHeart size={20} />
          </button>
          ) : (
            <button className="favouriteIcon">
              <FaRegHeart size={20} />
            </button>
        )} 
      </div>
    </div>
  );
};

export default Pokemon;
