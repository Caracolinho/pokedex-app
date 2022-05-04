import React from "react";
import { allTypes } from "../Api/PokemonApi";

const FilterComponent = ({ searchTerm, onChange , valueDropDown , onChangeDropDown}) => {
  return (
    <div className="FilterComponent">
      <div className="BottomButtonsStyle">
        <SearchBar onSearchTermChange={onChange} searchTerm={searchTerm} />
      </div>
      <div className="olanina"> 
        <DropDownType valueDropDown={valueDropDown} onChangeDropDown={onChangeDropDown}/>
      </div>
    </div>
  );
};

function TopButtons({ letters }) {
  return (
    <div className="TopButtonsColor">
      <button className="TopButtonsText">{letters}</button>
    </div>
  );
}

function SearchBar({ searchTerm, onSearchTermChange }) {
  return (
    <div className="SearchBar">
      <input
        className="SearchBox"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => onSearchTermChange(event.target.value)}
      />
    </div>
  );
}

function TypeButton({ letters }) {
  return (
    <div className="TopButtonsColor">
      <button className="TopButtonsText">{letters}</button>
    </div>
  );
}

function DropDownType({valueDropDown , onChangeDropDown}){
    return (
        <div>
            <h1>{valueDropDown}</h1>
            <select value={valueDropDown} onChange={event=>onChangeDropDown(event.target.value)}>
              <option value="0">Type</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
        </div>
      );
}

export default FilterComponent;
