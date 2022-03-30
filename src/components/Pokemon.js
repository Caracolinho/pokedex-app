import React from "react"
import './Pokemon.css'

const Pokemon = ({image , name , type , isFavourite}) => {
 
    return(<div className="PokemonRow">
       <img  className="PokemonImage" src ={image}/>
       <div className="cardFotter">
           <p className="textName">{name}</p>
           <p className="textType">{type}</p>
           {/* <p>{isFavourite.toString()}</p> */}
       </div> 
    </div>)
}

export default Pokemon
