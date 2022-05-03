import React , {useState} from "react";

const FilterComponent = () =>{

    return (
        <div className="FilterComponent">
            {/* <div className="TopButtonsStyle">
                <TopButtons
                    letters={"All"}
                />
                <TopButtons
                    letters={"Favourites"}
                />
            </div> */}
            <div className="BottomButtonsStyle">
                <SearchBar/>
            </div>
            {/* <div className="TypeButton">
                <TypeButton
                    letters={"Type"}
                />
            </div> */}
        </div>
    );
}


function TopButtons({letters}){
    return (
        <div className="TopButtonsColor">
           <button className="TopButtonsText">{letters}</button> 
        </div>
    );
}

function SearchBar(){
    return(
        <div className="SearchBar">
            <input className="SearchBox" placeholder="Search"/>
        </div>   
    );
}

function TypeButton({letters}){ 
    return (
        <div className="TopButtonsColor">
           <button className="TopButtonsText">{letters}</button> 
        </div>
    );

}

export default FilterComponent;