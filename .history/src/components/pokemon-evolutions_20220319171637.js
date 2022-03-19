import React, { useEffect, useState } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  // const []
  // const 
  const [evolutions, isLoading, error] = useFetchPokemonEvolutions(1)
  const loopTroughChain = (item) => ({...item.species, ...item.evolves_to.map(loopTroughChain)})
  useEffect(() => {
    (() => {
      (chain) => {
        const evolutions = []
        console.log(chain.species);
        evolutions.push(chain.species)
        if(chain.evolves_to.length > 0){
          getEvoSpecies(chain.evolves_to[0], evolutions);
        }
    })()
  }, [])


  if(evolutions.chain){
    console.log(getEvoSpecies(evolutions?.chain));
    // console.log(evolutions);
  }
  return (
    <div className="pokemon-card">
      <h1>hello</h1>
    </div>
  )
}

export default PokemonEvolutions 