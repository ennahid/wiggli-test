import React from 'react'
import "./styles.css"

const PokemonEvolutions = ({ evolutionChain = {} }) => {

  const loopTroughChain = (item) => ([item.species, ...item.evolves_to.map(loopTroughChain) ])
  console.log(evolutionChain.evolves_to.map(loopTroughChain));
  // const loopTroughChain = (evolvesTo => {...evolvesTo, loopTroughChain()})
  return (
    <div className="pokemon-card">
      <h1>hello
    </div>
  )
}

export default PokemonEvolutions 