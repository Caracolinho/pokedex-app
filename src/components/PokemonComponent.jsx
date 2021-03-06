import React  from "react";
import "./pokemonComponent.css";
import { FaRegHeart, FaHeart, FaArrowCircleLeft } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

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

const PokemonComponent = ({
  pokemon: {
    image,
    name,
    types = [],
    isFavorite,
    maxCP,
    maxHP,
    weight,
    height,
  },
  handleChangeIsFavourite,
  handleChangeIsUnfavourite,
}) => {
  const navigate = useNavigate();
  return (
    <div className="PokemonComponent">
      <div className="PokemonInfo">
        <img className="PokemonImageDetails" src={image} alt="Pokemon Image" />
        <button className="GoBackButton" onClick={() => navigate("/pokemons")}>
          <FaArrowCircleLeft size={60} color={"white"} />
        </button>
        <div className="PokemonSound">
          <GiSpeaker size={55} />
        </div>
        <div className="PokemonBody">
          <div className="PokemonName">{name}</div>
          <div className="PokemonTypes">{typesTextTransformation(types)}</div>
          {isFavorite ? 
            <button className="favouriteIconDetails" onClick={handleChangeIsUnfavourite}>
              <FaHeart size={28} />
            </button>
           : 
            <button className="favouriteIconDetails" onClick={handleChangeIsFavourite}>
              <FaRegHeart size={28} />
            </button>
          }
          <div className="CpBar"></div>
          <div className="HpBar"></div>
          <div className="PokemonCp">CP: {maxCP}</div>
          <div className="PokemonHp">HP: {maxHP}</div>
          <div className="PokemonMeasureContainer">
            <PokemonMeasure
              measure={"Weight"}
              from={weight.minimum}
              to={weight.maximum}
            />
            <PokemonMeasure
              measure={"Height"}
              from={height.minimum}
              to={height.maximum}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function PokemonMeasure({ measure, from, to }) {
  return (
    <div className="PokemonMeasure">
      <div className="MeasureText">{measure}</div>
      <div>
        <div className="MeasureFrom">{from} -</div>
        <div className="MeasureTo">{to}</div>
      </div>
    </div>
  );
}

export default PokemonComponent;
