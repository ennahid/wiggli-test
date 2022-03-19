import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemonEvolutions = (id) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const API_URL = "https://pokeapi.co/api/v2/evolution-chain";
    const API_PARAMS = `/${id}`
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${API_URL}${API_PARAMS}`).then((result) => {
            setPokemons(result.data);
            setIsLoading(false);
        }).catch(error => setError(error.message); setIsLoading(false);)
    }, [])

  return [pokemons, isLoading, error];
}

export default useFetchPokemonEvolutions;
