import React from 'react'
import useFetchPokemons from '../custom-hooks/useFetchPokemons';


const PokemonsList = () => {
    const [pokemons, isLoading] = useFetchPokemons()
  return (
    <>
        {isLoading ? <p>loading...</p> : pokemons.map(pokemon => <PokemonItem pokemon={} />)}
    </>
  )
}

export default PokemonsList 