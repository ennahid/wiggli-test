import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemons = (pokemonName) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState()
    const API_URL = "https://pokeapi.co/api/v2/pokemon";
    const API_PARAMS = pokemonName ? `/${pokemonName}` : "?limit=100&offset=200";
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${API_URL}${API_PARAMS}`).then((result) => {
            setPokemons(result.data.results || result.data);
            console.log(result.data.data || result.data);
            setIsLoading(false);
        })
    }, [])
  return [pokemons, isLoading];
}

export default useFetchPokemons;
