import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css"

const PokemonsList = () => {
    const [pokemons, isLoading] = useFetchPokemons()
  return (
    <div className="pokemons-list">
        {isLoading ? <p>loading...</p> : pokemons.map(pokemon => <PokemonItem pokemon={pokemon} />)}
    </div>
  )
}

export default PokemonItem 