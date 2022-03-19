import React from 'react'
import { Link, useParams } from "react-router-dom";
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import PokemonCard from './pokemon-card';
import "./styles.css"

const PokemonInfo = () => {
  const { name } = useParams();
  console.log(name);
    const [pokemon, isLoading, error] = useFetchPokemons(name)
  return (
    <div className="pokemon-info">
        {isLoading
        ? <p>Loading...</p>
        : (pokemon && !error)
            ? 
            <>
              <div className="pokemon-info-types">
                <PokemonCard pokemon={pokemon} />
                <h2>Types</h2>
                {pokemon.types.map(item => item.type).map(pokemon => <PokemonItem pokemon={pokemon} />)}
              </div>
            </>
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonInfo 