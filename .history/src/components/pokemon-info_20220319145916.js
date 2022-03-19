import React from 'react'
import { Link, useParams } from "react-router-dom";
import "./styles.css"

const PokemonInfo = () => {
  const { name } = useParams();
    const [pokemons, isLoading] = useFetchPokemons()
  return (
    <div className="pokemons-list">
        {isLoading ? <p>Loading...</p> : <p>gg</p>)}
    </div>
  )
}

export default PokemonInfo 