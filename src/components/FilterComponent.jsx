import React from "react";



const FilterComponent = () =>{
    return (
        <div className="FilterComponent">
            <div className="TopButtonsStyle">
                <topButtons
                    text={"All"}
                />
                <topButtons
                    text={"Favourites"}
                />
            </div>
            <div className="BottomButtonsStyle">
                <searchBar/>
            </div>
        </div>
    );
}


function topButtons (text){
    return (
        <div className="TopButtonsColor">
           <button className="TopButtonsText">{text}</button> 
        </div>
    );
}

function searchBar (){
    return(
        <div className="SearchBar">
            <div className="SearcBox">
                <div className="SearchIcon"></div>

            </div>
        </div>
    );
}

export default FilterComponent;