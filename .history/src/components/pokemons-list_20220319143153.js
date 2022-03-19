import React from 'react'
import useFetchPokemons from '../custom-hooks/useFetchPokemons';


const PokemonsList = () => {
    const [pokemons] = useFetchPokemons()
  return (
    <p>hello</p>
  )
}

export default PokemonsList 