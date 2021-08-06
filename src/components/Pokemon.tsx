import React from 'react'
import PokemonCard from './PokemonCard'

export interface PokemonProps {
  pokemon?: {
    name: string
    url: string
    index: number
  }[]
} 

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <div>
      {pokemon?.map((pokemon, index) => 
        <PokemonCard key={index} {...pokemon}/>
      )}
    </div>
  )
}

export default Pokemon

