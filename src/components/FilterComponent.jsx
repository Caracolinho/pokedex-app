import React     from "react";

const FilterComponent = ({searchTerm, onSearchTermChange}) =>{

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
                <SearchBar
                onSearchTermChange={setQuerySerach}
                searchTerm={searchTerm}
                />
            </div>
            {/* <div className="TypeButton">
                <TypeButton
                    letters={"Type"}
                />
            </div> */}
        </div>
    );
}

function setQuerySerach(){
    const value = event => setQuery ();
    return value;
}



function TopButtons({letters}){
    return (
        <div className="TopButtonsColor">
           <button className="TopButtonsText">{letters}</button> 
        </div>
    );
}

function SearchBar({searchTerm , onSearchTermChange}){
    return(
        <div className="SearchBar">
            <input className="SearchBox" placeholder="Search" value={searchTerm} onChange={onSearchTermChange} />
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