import React from 'react'
import { useFetchPokemonTypes } from '../custom-hooks';
import { useParams } from "react-router-dom";
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsTypes = () => {
  const { name } = useParams();
    const [{ pokemon }, isLoading, error] = useFetchPokemonTypes(name)
  return (
    <div className="pokemons-list">
        {isLoading
        ? <p>Loading...</p>
        : ( pokemon && pokemon.length > 0 && !error)
            ? pokemon.map((pokemon, idx) => <PokemonItem key={idx} pokemon={pokemon} />)
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonsTypes 