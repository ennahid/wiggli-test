import React from 'react'
import { Link, useParams } from "react-router-dom";
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import "./styles.css"

const PokemonInfo = () => {
  const { name } = useParams();
    const [pokemon, isLoading, error] = useFetchPokemons(name)
  return (
    <div className="pokemons-list">
        {isLoading
        ? <p>Loading...</p>
        : (pokemon > 0 && !error)
            ? pokemon.types.map(item => item.type).map(pokemon => <PokemonItem pokemon={pokemon} />)
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonInfo 