import React from 'react'


const PokemonItem = ({ pokemon }) => {
  return (
    <div className="single-pokemon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" />
        <a href={`${pokemon.url}`}>{pokemon.name}</a>
        <p>{pokemon.name}</p>
    </div>
  )
}

export default PokemonItem 