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
        const newOffset = event.selected * pageLimit
        // const newOffset = (event.selected * pageLimit) % items.length;
        setPageOffset(newOffset);
      };
  return (
    <>
            {isLoading
            ? <p>Loading...</p>
            : ((pokemons && pokemons.length > 0) && !error)
                ?
                    <>
                        <div className="pokemons-list">
                            {pokemons.map((pokemon, idx) => <PokemonItem key={idx} pokemon={pokemon} />)}
                        </div>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageLimit}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </>
                : "Sorry no Pokemons found."}
    </>
  )
}

export default PokemonsList 