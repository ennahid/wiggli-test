import React from 'react'
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsList = () => {
    const [pokemons, isLoading] = useFetchPokemons()
  return (
    <div className="pokemons-list">
        {isLoading ? <p>loading...</p> : pokemons.map(pokemon => <PokemonItem pokemon={pokemon} />)}
    </div>
  )
}

export default PokemonsList 