import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemons = (pokemonName) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const API_URL = "https://pokeapi.co/api/v2/pokemon";
    console.log(pokemonName);
    const API_PARAMS = pokemonName ? `/${pokemonName}` : "?limit=20";
    useEffect(() => {
        console.log("hi");
        setIsLoading(true);
        axios.get(`${API_URL}${API_PARAMS}`).then((result) => {
            setPokemons(result.data.results || result.data);
            console.log(result);
            setIsLoading(false);
        }).catch(error => setError(error.message))
    })
  return [pokemons, isLoading, error];
}

export default useFetchPokemons;
