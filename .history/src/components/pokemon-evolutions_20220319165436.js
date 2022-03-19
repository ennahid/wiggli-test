import React from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  const [evolution, isLoading, error] = useFetchPokemonEvolutions(id)
  const loopTroughChain = (item) => ({...item.species, ...item.evolves_to.map(loopTroughChain)})
  console.log(id);
  console.log(evolution);
  console.log(evolution?.chain?.evolves_to?.map(loopTroughChain).flat());

  const getEvoSpecies = (evolves_to) => {

  }
  // const loopTroughChain = (evolvesTo => {...evolvesTo, loopTroughChain()})
  return (
    <div className="pokemon-card">
      <h1>hello</h1>
    </div>
  )
}

export default PokemonEvolutions 