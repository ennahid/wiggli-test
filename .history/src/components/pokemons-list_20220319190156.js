import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useFetchPokemons } from '../custom-hooks';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsList = (name) => {
    const [pageLimit, setPageLimit] = useState(20)
    const [pageOffset, setPageOffset] = useState(0)
    const [pokemons, isLoading, error] = useFetchPokemons({
        pageLimit,
        pageOffset
    })

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
      };
  return (
    <div className="pokemons-list">
        {isLoading
        ? <p>Loading...</p>
        : ((pokemons && pokemons.length > 0) && !error)
            ? pokemons.map((pokemon, idx) => <PokemonItem key={idx} pokemon={pokemon} />)
            : "Sorry no Pokemons found."}
    </div>
  )
}

export default PokemonsList 