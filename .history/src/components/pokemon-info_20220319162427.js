import React from 'react'
import { Link, useParams } from "react-router-dom";
import useFetchPokemons from '../custom-hooks/useFetchPokemons';
import useFetchPokemonEvolutions from '../custom-hooks/useFetchPokemons';
import PokemonItem from './pokemon-item';
import PokemonCard from './pokemon-card';
import "./styles.css"

const PokemonInfo = () => {
  const { name } = useParams();
  const [pokemon, isLoading, error] = useFetchPokemons(name)
  const [pokemon1, isLoading1, error1] = useFetchPokemonEvolutions(pokemon.id)
  console.log(pokemon1);
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
                <div className="pokemons-list">
                  {pokemon?.types?.map(item => item.type).map((pokemon, idx) => <PokemonItem isType={true} key={idx} pokemon={pokemon} />)}
                </div>
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