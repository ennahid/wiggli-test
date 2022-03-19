import React from 'react'
import { Link } from "react-router-dom";

const PokemonItem = ({ pokemon, isType }) => {
  return (
    <div className="single-pokemon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" />
        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        {/* <p>{pokemon.name}</p> */}
    </div>
  )
}

export default PokemonItem 