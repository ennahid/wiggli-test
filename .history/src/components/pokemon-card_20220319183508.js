import React from 'react'
import "./styles.css"

const PokemonCard = ({ pokemon = {} }) => {
  return (
    <div className="pokemon-card">
      <div className="card-image">
        <img src={`${pokemon.sprites?.front_default}`} />
      </div>
      <div className="card-text">
        <div className="card-text-key">
          <p>Id:</p>
          <p>Name:</p>
          <p>Experience:</p>
          <p>Height:</p>
          <p>Weight:</p>
        </div>
        <div className="card-text-value">
          <p>{pokemon.id}</p>
          <p>{pokemon.base_experience}</p>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard 