import React from 'react'
import useFetchPokemons from '../custom-hooks/useFetchPokemons';


const PokemonsList = () => {
    const [pokemons, isLoading] = useFetchPokemons()
  return (
    {isLoading ? 
        (<p>hello</p>) : (<p>hello</p>)
    }
  )
}

export default PokemonsList 