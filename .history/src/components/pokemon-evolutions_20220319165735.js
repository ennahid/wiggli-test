import React from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  const [evolution, isLoading, error] = useFetchPokemonEvolutions(id)
  const loopTroughChain = (item) => ({...item.species, ...item.evolves_to.map(loopTroughChain)})
  console.log(id);
  console.log(evolution);
  const getEvoSpecies = (chain, array) => {
    const evolutions = []
    if(array) {
      array.push(chain.evolves_to)
    }
    if(chain.evolves_to.length > 0){
      evolutions.push()
      getEvoSpecies(chain.evolves_to);
    }
    return evolutions;
  }
  console.log(getEvoSpecies(evolution?.chain));
  // const loopTroughChain = (evolvesTo => {...evolvesTo, loopTroughChain()})
  return (
    <div className="pokemon-card">
      <h1>hello</h1>
    </div>
  )
}

export default PokemonEvolutions 