import React, { useEffect, useState, Fragment } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  // console.log(id);
  const [evolutions, isLoading, error] = useFetchPokemonEvolutions(id)
  const Item = ({ data })=> {
    return (
      <>
        <PokemonItem pokemon={data.species} />
        {data.evolves_to.length > 0 && (data.evolves_to.map((item, idx) => (<Fragment key={idx} > <img height={20} src="https://www.seekpng.com/png/full/25-254372_80-hand-drawn-arrows-ps-brush-set-arrow.png" /> <Item data={item} /></Fragment>)))}
      </>
      
    )
 }

  return (
    <>
      <h2>Evolutions</h2>
      <div className="evolutions-list">
        {evolutions?.chain && <Item data={evolutions.chain} />}
      </div>
    </>
  )
}

export default PokemonEvolutions 