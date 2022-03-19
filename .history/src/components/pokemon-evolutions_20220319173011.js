import React, { useEffect, useState } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  // const []
  // const 
  const [evolutions, isLoading, error] = useFetchPokemonEvolutions(1)
  const loopTroughChain = (item) => ([item?.species, item?.evolves_to?.map(loopTroughChain)])
  if(evolutions){
    console.log(evolutions);
    console.log(loopTroughChain([evolutions.chain?.evolves_to[0]]));
  }

  // const getEvoSpecies = 
  //   return evolutions;
  // }

  // if(evolutions.chain){
  //   console.log(getEvoSpecies(evolutions?.chain));
  //   // console.log(evolutions);
  // }
  return (
    <div className="pokemon-card">
      <h1>hello</h1>
    </div>
  )
}

export default PokemonEvolutions 