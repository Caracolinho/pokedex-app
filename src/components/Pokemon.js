import React from "react"
import { FaHeart , FaRegHeart } from 'react-icons/fa';
import './Pokemon.css'

const Pokemon = ({image , name , type , isFavourite}) => {
 
    return(<div className="PokemonRow">
       <img  className="PokemonImage" src ={image}/>
       <div className="cardFotter">
           <div className="textName">{name}</div>
           <div className="textType">{type}</div>
           {isFavourite ? <div className="favouriteIcon"><FaHeart/></div> : <div className="favouriteIcon"><FaRegHeart/></div>}
           
       </div> 
    </div>)
}

export default Pokemon
