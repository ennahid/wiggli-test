import React from 'react'


const PokemonItem = ({pokemon}) => {
  return (
    <>
        {isLoading ? <p>loading...</p> : <p>hello</p>}
    </>
  )
}

export default PokemonItem 