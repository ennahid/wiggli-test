import React from 'react'
import { Link, useParams } from "react-router-dom";
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonCard = () => {
  const { name } = useParams();
  return (
    <div className="pokemon-info">
        {isLoading
        ? <p>Loading...</p>
        : (pokemon && !error)
            ? 
            <>
              <div className="pokemon-info-types">
                <h2>Types</h2>
                {pokemon.types.map(item => item.type).map(pokemon => <PokemonItem pokemon={pokemon} />)}
              </div>
            </>
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonCard 