import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemons = (id) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const API_URL = "https://pokeapi.co/api/v2/evolution-chain/";
    console.log(pokemonName);
    const API_PARAMS = `${id}`
    useEffect(() => {
        console.log("hi");
        setIsLoading(true);
        axios.get(`${API_URL}${API_PARAMS}`).then((result) => {
            setPokemons(result.data.results || result.data);
            console.log(result.data.results || result.data);
            setIsLoading(false);
        }).catch(error => setError(error.message))
    }, [])

  return [pokemons, isLoading, error];
}

export default useFetchPokemons;