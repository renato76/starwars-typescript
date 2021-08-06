import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

export interface PokemonProps {
  pokemon?: {
    name: string
    url: string
    index: number
  }[]
} 

const Pokemon: React.FC<PokemonProps> = () => {
  const [pokemon, setPokemon] = useState([])

  async function getPokemon() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const poke = data.results
    setPokemon(poke)
  }

  useEffect(() => {
    getPokemon()
  }, [])
  // console.log(pokemon)
  return (
    <>
      <div>
        <h1>Pokemon</h1>
      </div>
      <div  className="card-container">
        {pokemon?.map((pokemon, index ) => 
          <PokemonCard key={index} {...pokemon}/>
        )}
      </div>
    </>
  )
}

export default Pokemon

