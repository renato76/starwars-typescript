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
        <div className="card-info">
          <h1>{name}</h1>
          <h3>Height: {height}</h3>
          <h3>Birth Year: {birthYear}</h3>
          <h3>{films.length} Films</h3>
        </div>  
      </div>
  )
}

export default PokemonCard

