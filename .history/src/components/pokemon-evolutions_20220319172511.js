import React, { useEffect, useState } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  // const []
  // const 
  const [evolutions, isLoading, error] = useFetchPokemonEvolutions(1)
  const loopTroughChain = (item) => ({...item[0].species, ...item.evolves_to.map(loopTroughChain)})
  console.log(loopTroughChain([evolutions.chain]));

  const getEvoSpecies = 
    return evolutions;
  }

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