import React from 'react'
import { Link, useParams } from "react-router-dom";
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonInfo = () => {
  const { name } = useParams();
    const [pokemon, isLoading, error] = useFetchPokemons(name)
  return (
    <div className="pokemons-list">
        {isLoading
        ? <p>Loading...</p>
        : (pokemon && !error)
            ? 
            <>
              <h2>Types</h2>
              {pokemon.types.map(item => item.type).map(pokemon => <PokemonItem pokemon={pokemon} />)}
            </>
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonInfo 