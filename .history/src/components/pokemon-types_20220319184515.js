import React from 'react'
import { useFetchPokemonTypes } from '../custom-hooks';
import { useParams } from "react-router-dom";
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsTypes = () => {
  const { name } = useParams();
    const [types, isLoading, error] = useFetchPokemonTypes(name)
  return (
    <div className="pokemons-list">
        {isLoading
        ? <p>Loading...</p>
        : ( types?.pokemon && types?.pokemon.length > 0 && !error)
            ? types?.pokemon?.slice(0, 20).map((eachPokemon, idx) => <PokemonItem key={idx} pokemon={eachPokemon.pokemon} />)
            : "Sorry no Types found."}
    </div>
  )
}

export default PokemonsTypes 