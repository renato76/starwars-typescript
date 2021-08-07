import React from 'react'
import { Link } from 'react-router-dom'
import { CharacterProps } from './Characters'

const PokemonCard: React.FC<CharacterProps> = (props: CharacterProps) => {
  const { id, name, height, birth_year: birthYear, films } = props
  console.log(props)
  return (
      <div className="card">
        <Link to={`/people/${id}`}>
          
        </Link>
        <h1>{name}</h1>
        <h3>{birthYear}</h3>
        <h3>{height}</h3>
        <h3>{films.length}</h3>
      </div>
  )
}

export default PokemonCard


