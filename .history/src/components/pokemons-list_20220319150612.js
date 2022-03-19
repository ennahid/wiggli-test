import React from 'react'
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsList = () => {
    const [pokemons, isLoading] = useFetchPokemons()
  return (
    <div className="pokemons-list">
        {isLoading ? <p>Loading...</p> : pokemons.length > 0 ? pokemons.map(pokemon => <PokemonItem pokemon={pokemon} /> : "Sorry no Pokemons found")}
    </div>
  )
}

export default PokemonsList 