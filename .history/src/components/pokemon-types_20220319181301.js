import React from 'react'
import { useFetchPokemonTypes } from '../custom-hooks';
import { useParams } from "react-router-dom";
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsTypes = () => {
  const { name } = useParams();
    const [types, isLoading, error] = useFetchPokemonTypes(name)
    console.log(types);
  return (
    <div className="pokemons-list">
        {isLoading
        ? <p>Loading...</p>
        : ( types?.pokemon && types?.pokemon.length > 0 && !error)
            ? types?.pokemon?.map((eachPokemon, idx) => <PokemonItem key={idx} pokemon={eachPokemon} />)
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonsTypes 