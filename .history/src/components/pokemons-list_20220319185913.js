import React from 'react'
import ReactPaginate from 'react-paginate';
import { useFetchPokemons } from '../custom-hooks';
import PokemonItem from './pokemon-item';
import "./styles.css"

const PokemonsList = (name) => {
    const [pokemons, isLoading, error] = useFetchPokemons()
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
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