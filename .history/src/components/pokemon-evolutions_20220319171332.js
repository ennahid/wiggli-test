import React, { useState } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  const []
  const 
  const [evolutions, isLoading, error] = useFetchPokemonEvolutions(1)
  const loopTroughChain = (item) => ({...item.species, ...item.evolves_to.map(loopTroughChain)})
  console.log(id);
  console.log(evolutions);
  const getEvoSpecies = (chain) => {
    const evolutions = []
    console.log(chain.species);
    evolutions.push(chain.species)
    if(chain.evolves_to.length > 0){
      getEvoSpecies(chain.evolves_to[0], evolutions);
    }
    return evolutions;
  }
  if(evolution.chain){
    console.log(getEvoSpecies(evolutions?.chain));
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