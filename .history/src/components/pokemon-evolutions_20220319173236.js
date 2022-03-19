import React, { useEffect, useState } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import PokemonItem from './pokemon-item';
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

  const List = ({complete_data})=> {
    return (
       <ul className="list-disc">
         {complete_data.map(x=> <Item key={x.id} data={x} />)}
       </ul>
    )
 }

  return (
    <div className="pokemon-card">
      <h1>hello</h1>
    </div>
  )
}

export default PokemonEvolutions 