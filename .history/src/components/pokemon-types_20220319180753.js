import React from 'react'
import { useFetchPokemonTypes } from '../custom-hooks';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsTypes = (name) => {
    const [pokemons, isLoading, error] = useFetchPokemonTypes(name)
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

export default PokemonsTypes 