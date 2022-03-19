import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState([])
    useEffect(() => {
        axios.get("pokemon?limit=100&offset=200").then((result) => {

        })
    })
  return [pokemons, isLoading];
}

export default useFetchPokemons;
