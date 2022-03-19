import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemonTypes = (name) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const API_URL = "https://pokeapi.co/api/v2/type";
    const API_PARAMS = `/${name}?limit=20`;
    useEffect(() => {
        console.log("hi");
        setIsLoading(true);
        axios.get(`${API_URL}${API_PARAMS}`).then((result) => {
            setPokemons(result.data.slice(0, 20));
            console.log(result.data.results || result.data);
            setIsLoading(false);
        }).catch(error => {setError(error.message); setIsLoading(false);})
    }, [])

  return [pokemons, isLoading, error];
}

export default useFetchPokemonTypes;
