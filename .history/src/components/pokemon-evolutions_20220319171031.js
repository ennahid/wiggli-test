import React from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  const evolutions = []
  const [evolution, isLoading, error] = useFetchPokemonEvolutions(1)
  const loopTroughChain = (item) => ({...item.species, ...item.evolves_to.map(loopTroughChain)})
  console.log(id);
  console.log(evolution);
  const getEvoSpecies = (chain) => {
    if(chain.evolves_to.length > 0){
      console.log(chain.species);
      evolutions.push(chain.species)
      getEvoSpecies(chain.evolves_to[0], evolutions);
    }
  }
  if(evolution.chain){
    console.log(getEvoSpecies(evolution?.chain));
    // console.log(evolutions);
  }
  // const loopTroughChain = (evolvesTo => {...evolvesTo, loopTroughChain()})
  return (
    <div className="pokemon-card">
      <h1>hello</h1>
    </div>
  )
}

export default PokemonEvolutions 