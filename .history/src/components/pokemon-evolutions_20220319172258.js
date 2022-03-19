import React, { useEffect, useState } from 'react'
import { useFetchPokemonEvolutions } from '../custom-hooks';
import "./styles.css"

const PokemonEvolutions = ({ id }) => {
  const [evolutionsList, setEvolutionsList] = useState([])
  const [evolutions, isLoading, error] = useFetchPokemonEvolutions(1)
  const loopTroughChain = (item) => ({...item.species, ...item.evolves_to.map(loopTroughChain)})
  useEffect(() => {
    if(evolutions){
      const newChain = evolutions?.chain
      (function getEvoSpecies (newChain) {
         setEvolutionsList((prevValues) => ([...prevValues, newChain.species ]))
         if(newChain.evolves_to.length > 0){
           getEvoSpecies(newChain.evolves_to[0], evolutionsList);
         }
       })()
    }
      console.log(evolutionsList);
  }, [evolutions])

  return (
    <div className="pokemon-card">
      <h1>hello</h1>
    </div>
  )
}

export default PokemonEvolutions 