import React from 'react'


const PokemonItem = ({ pokemon }) => {
  return (
    <div className="single-pokemon">
        <p>{pokemon.name}</p>
    </div>
  )
}

export default PokemonItem 