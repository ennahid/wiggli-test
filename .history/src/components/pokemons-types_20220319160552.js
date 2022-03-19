import React from 'react'
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsList = (name) => {
    const [pokemons, isLoading, error] = useFetchPokemons()
  return (
    <div className="pokemons-list">
        {isLoading
        ? <p>Loading...</p>
        : (pokemons.length > 0 && !error)
            ? pokemons.map((pokemon, idx) => <PokemonItem key={idx} pokemon={pokemon} />)
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonsList 