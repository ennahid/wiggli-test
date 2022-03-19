import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useFetchPokemonEvolutions, useFetchPokemons } from '../custom-hooks';
import PokemonItem from './pokemon-item';
import PokemonEvolutions from './pokemon-evolutions';
import PokemonCard from './pokemon-card';
import "./styles.css"

const PokemonInfo = () => {
  const { name } = useParams();
  const [pokemon, isLoading, error] = useFetchPokemons(name)
  const [evolution, isLoading1, error1] = useFetchPokemonEvolutions(1)
  console.log(evolution);
  // console.log(pokemon.types.map(item => item.type));
  return (
    <div className="pokemon-info">
        {isLoading
        ? <p>Loading...</p>
        : (pokemon && !error)
            ? 
            <>
              <div className="pokemon-info-types">
                <PokemonCard pokemon={pokemon} />
                <h2>Evolutions</h2>
                <PokemonEvolutions chain={evolution.chain} />
                <h2>Types</h2>
                <div className="pokemons-list">
                  {pokemon?.types?.map(item => item.type).map((pokemon, idx) => <PokemonItem isType={true} key={idx} pokemon={pokemon} />)}
                </div>
              </div>
            </>
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonInfo 