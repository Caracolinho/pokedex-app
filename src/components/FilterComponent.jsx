import React , {useState , useEffect} from "react";
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
    const [options, setOptions] = useState([])
    
    useEffect(async()=>{
        const setTypes = await allTypes();
        setOptions(setTypes);
    },[]);
    
    return (
        <div>
            <h1>{valueDropDown}</h1>
            <select value={valueDropDown} onChange={event=>onChangeDropDown(event.target.value)}>
              {options.map(type =>{
                  return (
                  <option key={type} value={type}>{type}</option>
                  );
              })}
            </select>
        </div>
      );
}

export default FilterComponent;
