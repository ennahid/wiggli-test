import React from 'react'
import { Link, useParams } from "react-router-dom";
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import PokemonCard from './pokemon-card';
import "./styles.css"

const PokemonInfo = () => {
  const [pokemons, isLoading, error] = useFetchPokemons()
  const { name } = useParams();
  return (
    <div className="pokemon-info">
        {isLoading
        ? <p>Loading...</p>
        : (pokemons && !error)
            ? 
            <>
              <div className="pokemon-info-types">
                <PokemonCard pokemon={pokemons} />
                <h2>Types</h2>
                {pokemons.types.map(item => item.type).map(pokemon => <PokemonItem pokemon={pokemon} />)}
              </div>
            </>
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonInfo 