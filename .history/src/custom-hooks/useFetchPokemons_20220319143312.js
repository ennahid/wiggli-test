import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState()
    useEffect(() => {
        setIsLoading(true);
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200").then((result) => {
            setIsLoading(false);
            console.log(result.data);
        })
    }, [])
  return [pokemons, isLoading];
}

export default useFetchPokemons;
