import React from 'react'
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsList = () => {
    const [pokemons, isLoading] = useFetchPokemons()
  return (
    <>
        {isLoading ? <p>loading...</p> : pokemons.map(pokemon => <PokemonItem pokemon={pokemon} />)}
    </>
  )
}

export default PokemonsList 