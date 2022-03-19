import React from 'react'
// import { Link, useParams } from "react-router-dom";
// import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonCard = ({ pokemon }) => {
  const { name } = useParams();
  return (
    <div className="pokemon-card">
      <div className="card-image">
        <img src={`${pokemon.sprites.front_default}`} />
      </div>
    </div>
  )
}

export default PokemonCard 