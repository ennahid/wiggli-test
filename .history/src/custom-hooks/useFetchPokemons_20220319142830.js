import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        axios.get("pokemon?limit=100&offset=200").then((result) => {

        })
    })
  return (
    <p></p>
  )
}

export default useFetchPokemons;
