import React from 'react'
import "./styles.css"

const PokemonEvolutions = ({ evolutionChain = {} }) => {

  const loopTroughChain = (item) => ({...item.species, evolves_to: item.evolves_to.map(loopTroughChain) })
  const loopTroughChain = (evolvesTo => {...evolvesTo, loopTroughChain()})
  return (
    <div className="pokemon-card">
    </div>
  )
}

export default PokemonEvolutions 