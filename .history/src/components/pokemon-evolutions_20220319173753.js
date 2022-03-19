import React, { useEffect, useState } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  const [evolutions, isLoading, error] = useFetchPokemonEvolutions(1)
  const loopTroughChain = (item) => ([item?.species, item?.evolves_to?.map(loopTroughChain)])
  if(evolutions){
    console.log(evolutions);
    console.log(loopTroughChain([evolutions.chain?.evolves_to[0]]));
  }

  const Item = ({ data })=> {
    return (
      <>
        <PokemonItem pokemon={data.species} />
        {data.evolves_to.map(((item, idx))=> <Item key={idx} data={item} />)}
      </>
      
    )
 }

  return (
    <div className="pokemon-card">
       {complete_data.map((item, idx)=> <Item key={idx} data={evolutions.chain} />)}
    </div>
  )
}

export default PokemonEvolutions 