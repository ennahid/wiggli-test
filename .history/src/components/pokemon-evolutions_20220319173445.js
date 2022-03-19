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

  const Item = ({data})=> {
    return (
      <li className="ml-10">
          {data.fullname}
          {data.children.length > 0 && (
             <ul className="list-disc">
                {data.children.map((x)=> <Item key={x.id} data={x} />)}
             </ul>
          )}
      </li>
    )
 }

  return (
    <div className="pokemon-card">
       {complete_data.map(x=> <Item key={x.id} data={evolutions.chain} />)}
    </div>
  )
}

export default PokemonEvolutions 