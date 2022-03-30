import React from "react"
import './Pokemon.css'

const Pokemon = ({image , name , type , isFavourite}) => {
 
    return(<div className="PokemonRow">
       <div className="cardImage">
       <img src ={image}/>
       </div>
       <div className="cardFotter">
           <h4>{name}</h4>
           <p>{type}</p>
           {/* <p>{isFavourite.toString()}</p> */}
       </div> 
    </div>)
}

export default Pokemon
