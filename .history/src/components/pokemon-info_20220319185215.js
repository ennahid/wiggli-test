import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useFetchPokemons } from '../custom-hooks';
import PokemonItem from './pokemon-item';
import PokemonEvolutions from './pokemon-evolutions';
import PokemonCard from './pokemon-card';
import "./styles.css"

const PokemonInfo = () => {
  const { name } = useParams();
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
                <PokemonEvolutions id={pokemon.id} />
                <h2>Types</h2>
                <div className="pokemons-list">
                  {pokemon?.types?.map(item => item.type).map((pokemon, idx) => <PokemonItem isType={true} key={idx} pokemon={pokemon} />)}
                </div>
              </div>
            </>
            : "Sorry no Pokemon found."}
    </div>
  )
}

export default PokemonInfo 